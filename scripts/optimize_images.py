#!/usr/bin/env python3
"""
Script d'optimisation des images - Convertir PNG/JPG en WebP/AVIF
Usage: python3 optimize_images.py [--dry-run]
"""

import os
import sys
from pathlib import Path
from PIL import Image
import subprocess

# Configuration
IMG_DIR = Path(__file__).parent.parent / "img"
QUALITY_WEBP = 80
QUALITY_AVIF = 85
FORMATS = ['.png', '.jpg', '.jpeg']

# Couleurs pour le terminal
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'

def get_file_size(path):
    """Retourne la taille en KiB"""
    return os.path.getsize(path) / 1024

def convert_to_webp(input_path, output_path, quality=80):
    """Convertir une image en WebP"""
    try:
        img = Image.open(input_path)
        # Convertir RGBA en RGB si besoin
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        img.save(output_path, 'WEBP', quality=quality, method=6)
        return True
    except Exception as e:
        print(f"{RED}❌ Erreur WebP {input_path}: {e}{RESET}")
        return False

def convert_to_avif(input_path, output_path, quality=85):
    """Convertir une image en AVIF (via ffmpeg si disponible)"""
    try:
        # Essayer avec pimagingmagick d'abord
        img = Image.open(input_path)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Pillow 10.0+ supporte AVIF
        try:
            img.save(output_path, 'AVIF', quality=quality, speed=6)
            return True
        except:
            # Fallback: utiliser ffmpeg
            result = subprocess.run(
                ['ffmpeg', '-i', str(input_path), '-c:v', 'libaom-av1', 
                 '-crf', str(51-int(quality*0.51)), str(output_path), '-y'],
                capture_output=True
            )
            return result.returncode == 0
    except Exception as e:
        print(f"{YELLOW}⚠️  AVIF échoué (ffmpeg?) {input_path}: {e}{RESET}")
        return False

def optimize_images(dry_run=False):
    """Optimiser toutes les images du dossier img/"""
    if not IMG_DIR.exists():
        print(f"{RED}❌ Dossier {IMG_DIR} non trouvé{RESET}")
        return
    
    images = [f for f in IMG_DIR.glob('*') if f.suffix.lower() in FORMATS]
    
    if not images:
        print(f"{YELLOW}⚠️  Aucune image trouvée dans {IMG_DIR}{RESET}")
        return
    
    print(f"\n{BLUE}🖼️  Optimisation d'images - {len(images)} fichier(s) trouvé(s){RESET}\n")
    
    total_saved = 0
    results = []
    
    for img_path in sorted(images):
        original_size = get_file_size(img_path)
        filename = img_path.stem
        
        # Chemins de sortie
        webp_path = IMG_DIR / f"{filename}.webp"
        avif_path = IMG_DIR / f"{filename}.avif"
        
        print(f"Traitement: {img_path.name}")
        print(f"  Taille originale: {original_size:.1f} KiB")
        
        # Convertir WebP
        if not dry_run:
            if convert_to_webp(img_path, webp_path, QUALITY_WEBP):
                webp_size = get_file_size(webp_path)
                reduction = (1 - webp_size / original_size) * 100
                print(f"  {GREEN}✅ WebP: {webp_size:.1f} KiB (-{reduction:.0f}%){RESET}")
                total_saved += original_size - webp_size
            else:
                webp_size = 0
        else:
            print(f"  🔄 WebP: N/A (dry-run)")
            webp_size = 0
        
        # Convertir AVIF
        if not dry_run:
            if convert_to_avif(img_path, avif_path, QUALITY_AVIF):
                avif_size = get_file_size(avif_path)
                reduction_avif = (1 - avif_size / original_size) * 100
                print(f"  {GREEN}✅ AVIF: {avif_size:.1f} KiB (-{reduction_avif:.0f}%){RESET}")
                if webp_size > 0 and avif_size < webp_size:
                    print(f"     💡 AVIF est {webp_size - avif_size:.1f} KiB plus petit que WebP")
            else:
                print(f"  {YELLOW}⚠️  AVIF: conversion échouée{RESET}")
        else:
            print(f"  🔄 AVIF: N/A (dry-run)")
        
        print()
    
    # Résumé
    if not dry_run:
        print(f"\n{BLUE}{'='*50}{RESET}")
        print(f"{GREEN}✨ Économies totales:{RESET} {total_saved:.1f} KiB")
        print(f"{BLUE}{'='*50}{RESET}\n")
        
        print(f"{YELLOW}📝 Actions suivantes:{RESET}")
        print("1. Vérifier les images converties")
        print("2. Mettre à jour le HTML avec <picture> et fallbacks")
        print("3. Tester avec Lighthouse")
        print("4. Commiter les changements")
    else:
        print(f"\n{YELLOW}🔄 Mode dry-run - Aucune image convertie{RESET}")

def main():
    dry_run = '--dry-run' in sys.argv
    
    if dry_run:
        print(f"\n{YELLOW}Mode test (--dry-run){RESET}\n")
    
    optimize_images(dry_run=dry_run)

if __name__ == '__main__':
    main()
