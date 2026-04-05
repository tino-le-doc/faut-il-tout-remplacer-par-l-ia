# 🖼️ Guide Complet d'Optimisation des Images

## 📊 État Actuel
- **Logo PNG**: `img/1000074494.png` (~50-100 KiB estimé - REMPLACER)
- **Logo WebP**: `img/logo.webp` (utilisé sur index.html - BON ✅)
- **Images d'arrière-plan**: `img/tldia.webp` (utilisé en background - BON ✅)

## 🎯 Économies Estimées
- Remplacer PNG logo par WebP: **~40-60 KiB** 
- Ajouter AVIF fallback: 20% de réduction supplémentaire
- **Total estimé: 130+ KiB d'économies** 

---

## 📝 Stratégie d'Optimisation

### 1️⃣ Formats à Utiliser
```
Priorité: AVIF > WebP > PNG (fallback)
```

| Format | Support | Taille | Cas d'Usage |
|--------|---------|--------|------------|
| **AVIF** | 84% browsers | -30% | Modern browsers (Safari 16+, Chrome 85+) |
| **WebP** | 97% browsers | -25% vs PNG | Fallback après AVIF |
| **PNG** | 100% browsers | Baseline | Fallback pour vieux navigateurs |

### 2️⃣ Optimiser les Images Locales

#### A) Créer les versions optimisées
```bash
# À faire AVANT de pousser en production
cd /Users/martialfabrice/faut-il-tout-remplacer-par-l-ia/img

# Convertir logo PNG → WebP et AVIF
ffmpeg -i 1000074494.png -q:v 80 logo.webp
ffmpeg -i 1000074494.png -c:v libaom-av1 -crf 30 logo.avif

# Vérifier les tailles
ls -lh logo.*
```

#### B) Résultats attendus
```
1000074494.png    ~100 KiB  (ACTUEL)
logo.webp         ~30 KiB   (WebP 70% petite)
logo.avif         ~24 KiB   (AVIF 76% petite)
```

### 3️⃣ Mettre à jour le HTML

#### ❌ AVANT (Inefficace)
```html
<img src="img/1000074494.png" alt="TLD" loading="lazy">
```

#### ✅ APRÈS (Optimisé)
```html
<picture>
  <source srcset="img/logo.avif" type="image/avif">
  <source srcset="img/logo.webp" type="image/webp">
  <img src="img/logo.png" alt="TLD" loading="lazy" width="200" height="200">
</picture>
```

### 4️⃣ Ajouter Dimensions (Éviter CLS)
```html
<!-- ❌ Mauvais: Layout shift au chargement -->
<img src="logo.webp" alt="TLD">

<!-- ✅ Bon: Espace réservé, pas de shift -->
<img src="logo.webp" alt="TLD" width="200" height="200" loading="lazy">
```

### 5️⃣ Lazy Loading Correct

| Élément | Chargement | Raison |
|---------|-----------|--------|
| **Logo hero (index.html)** | `eager` | LCP (Largest Contentful Paint) |
| **Logo autres pages** | `lazy` | Visible uniquement après scroll |
| **Images de contenu** | `lazy` | Non-critique |
| **Favicons/icons** | N/A | Chargées par navigateur |

---

## 🔧 Exécuter la Conversion

### Automatique (Recommandé)

```bash
# Utiliser ImageMagick ou ffmpeg (plus efficace que PIL)

# Option 1: ImageMagick (le plus simple)
convert img/1000074494.png -quality 85 img/logo.webp
convert img/1000074494.png -define heic:quality=90 img/logo.avif

# Option 2: ffmpeg (meilleur AVIF)
ffmpeg -i img/1000074494.png -q:v 75 img/logo.webp
ffmpeg -i img/1000074494.png -c:v libaom-av1 -crf 30 img/logo.avif

# Option 3: Script batch (voir optimize_images.py)
python3 scripts/optimize_images.py
```

### Manuel

1. Télécharger: https://imagemagick.org/
2. Convertir chaque image
3. Tester avec: `file img/*.{webp,avif}`

---

## 📋 Checklist d'Implémentation

### Phase 1: Préparation Images ⏳
- [ ] Installer ImageMagick ou ffmpeg
- [ ] Convertir `1000074494.png` → `logo.webp` + `logo.avif`
- [ ] Vérifier les tailles (perte max 5%)
- [ ] Utiliser script batch si +20 images

### Phase 2: Mettre à Jour HTML 🔄
- [ ] Remplacer toutes les `<img src="...png">` 
- [ ] Ajouter `<picture>` pour logo sur chaque page
- [ ] Ajouter `width="X" height="Y"` à toutes les images
- [ ] Vérifier `loading="eager"` uniquement pour LCP

### Phase 3: Test 🧪
- [ ] Vérifier images sur desktop (Chrome DevTools)
- [ ] Tester sur mobile (device throttling)
- [ ] Utiliser Lighthouse (doit montrer format WebP/AVIF)
- [ ] Vérifier CLS (Cumulative Layout Shift) = 0

### Phase 4: Monitoring 📊
- [ ] Activer Web Vitals monitoring
- [ ] Vérifier LCP < 2.5s
- [ ] Vérifier CLS < 0.1

---

## 🚀 Impact Attendu

### Avant Optimisation
- Logo: 100 KiB PNG
- LCP: 640ms (trop tard!)
- Total assets: 1.8 MiB

### Après Optimisation
- Logo: 24 KiB AVIF (76% savings!)
- LCP: ~400ms (improvement!)
- Total assets: 1.7 MiB  
- **Économie totale: 130+ KiB**

---

## 📚 Ressources

- [WebP Documentation](https://developers.google.com/speed/webp)
- [AVIF Guide](https://www.smashingmagazine.com/av1-media-guide/)
- [ImageMagick Docs](https://imagemagick.org/)
- [Lighthouse Performance](https://web.dev/performance/)

## 🔗 Bonnes Pratiques OWASP

✅ Formats optimisés (pas de perte de qualité visuelle)  
✅ Dimensions explicites (évite CLS)  
✅ Lazy loading approprié (ne bloque pas LCP)  
✅ Fallbacks accessibles (PNG pour vieux browsers)  

---

## 📞 Support

Si vous avez besoin d'aide:
1. Utiliser le script `optimize_images.py`
2. Consulter les logs de conversion
3. Valider avec Lighthouse après changement
