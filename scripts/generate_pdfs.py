#!/usr/bin/env python3
"""
Genere un PDF par module de la formation "IA au Quotidien"
Sans les scripts video - uniquement Objectif + Prompts
"""

import os
import re

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT

OUTPUT_DIR = "/home/user/faut-il-tout-remplacer-par-l-ia/PDFs/modules-formation"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Colors
CYAN = HexColor("#0096C8")
DARK = HexColor("#1E1E1E")
GRAY = HexColor("#666666")
LIGHT_GRAY = HexColor("#999999")
BG_BOX = HexColor("#F5F5FA")
BORDER_BOX = HexColor("#C8C8D2")


def get_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="ModuleNum",
        fontName="Helvetica-Bold",
        fontSize=18,
        textColor=CYAN,
        alignment=TA_CENTER,
        spaceAfter=10,
    ))
    styles.add(ParagraphStyle(
        name="ModuleTitle",
        fontName="Helvetica-Bold",
        fontSize=24,
        textColor=DARK,
        alignment=TA_CENTER,
        spaceAfter=10,
        leading=30,
    ))
    styles.add(ParagraphStyle(
        name="Duration",
        fontName="Helvetica",
        fontSize=13,
        textColor=GRAY,
        alignment=TA_CENTER,
        spaceAfter=15,
    ))
    styles.add(ParagraphStyle(
        name="Author",
        fontName="Helvetica-Oblique",
        fontSize=12,
        textColor=GRAY,
        alignment=TA_CENTER,
        spaceAfter=10,
    ))
    styles.add(ParagraphStyle(
        name="SectionTitle",
        fontName="Helvetica-Bold",
        fontSize=18,
        textColor=CYAN,
        spaceBefore=20,
        spaceAfter=10,
    ))
    styles.add(ParagraphStyle(
        name="ObjectiveText",
        fontName="Helvetica",
        fontSize=13,
        textColor=DARK,
        spaceAfter=10,
        leading=18,
    ))
    styles.add(ParagraphStyle(
        name="PromptTitle",
        fontName="Helvetica-Bold",
        fontSize=12,
        textColor=DARK,
        spaceBefore=12,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="PromptCode",
        fontName="Courier",
        fontSize=9,
        textColor=DARK,
        leading=13,
        leftIndent=8,
        rightIndent=8,
    ))
    styles.add(ParagraphStyle(
        name="FooterText",
        fontName="Helvetica-Oblique",
        fontSize=10,
        textColor=LIGHT_GRAY,
        alignment=TA_CENTER,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="HeaderText",
        fontName="Helvetica-Bold",
        fontSize=9,
        textColor=LIGHT_GRAY,
    ))
    return styles


def escape_xml(text):
    """Escape XML special characters for ReportLab Paragraph."""
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    text = text.replace('"', "&quot;")
    return text


def make_header_footer(canvas, doc, module_num):
    """Draw header and footer on each page."""
    canvas.saveState()
    # Header
    canvas.setFont("Helvetica-Bold", 9)
    canvas.setFillColor(LIGHT_GRAY)
    canvas.drawString(15 * mm, A4[1] - 12 * mm, "Formation IA au Quotidien | Par Tino Le Doc")
    canvas.setStrokeColor(CYAN)
    canvas.setLineWidth(0.5)
    canvas.line(15 * mm, A4[1] - 14 * mm, A4[0] - 15 * mm, A4[1] - 14 * mm)
    # Footer
    canvas.setFont("Helvetica-Oblique", 8)
    canvas.setFillColor(LIGHT_GRAY)
    canvas.drawCentredString(
        A4[0] / 2, 10 * mm,
        f"Module {module_num} | Page {doc.page}"
    )
    canvas.restoreState()


def parse_formation_file(filepath):
    """Parse the main formation markdown file and extract modules."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    modules = []
    module_splits = re.split(r"^# MODULE (\d+)", content, flags=re.MULTILINE)

    for i in range(1, len(module_splits), 2):
        num = int(module_splits[i])
        body = module_splits[i + 1]

        # Extract title (after the dash)
        title_match = re.match(r"\s*(?:--|\u2014|\u2013)\s*(.+?)[\n]", body)
        title = title_match.group(1).strip() if title_match else f"Module {num}"

        # Extract duration
        dur_match = re.search(r"\*\*Dur[e\u00e9]e\s*:\s*(.+?)\*\*", body)
        duration = dur_match.group(1).strip() if dur_match else ""

        # Extract objective
        obj_match = re.search(r"## Objectif\s*\n(.+?)(?=\n##|\Z)", body, re.DOTALL)
        objective = obj_match.group(1).strip() if obj_match else ""

        # Extract prompts block
        prompts_match = re.search(
            r"## Prompts.*?\n```\s*\n(.+?)```", body, re.DOTALL
        )
        prompts_raw = prompts_match.group(1).strip() if prompts_match else ""

        # Parse individual prompts
        prompts = []
        if prompts_raw:
            # Split on lines that look like prompt headers
            prompt_parts = re.split(
                r"\n(?=(?:Prompt \d+|Structure d[\'\u2019]un|[\u274c\u2705]|Prompt exercice|Prompt avanc))",
                "\n" + prompts_raw,
            )
            for part in prompt_parts:
                part = part.strip()
                if not part:
                    continue
                # Split title from content at first newline
                lines = part.split("\n", 1)
                if len(lines) == 2:
                    ptitle = lines[0].strip().rstrip(" :")
                    pcontent = lines[1].strip()
                    prompts.append((ptitle, pcontent))
                elif len(lines) == 1:
                    prompts.append(("Prompt", lines[0].strip()))

            if not prompts and prompts_raw:
                prompts.append(("Prompts", prompts_raw))

        modules.append({
            "num": num,
            "title": title,
            "duration": duration,
            "objective": objective,
            "prompts": prompts,
        })

    return modules


def slugify(text):
    """Create a filename-safe slug."""
    import unicodedata
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s]+", "-", text)
    text = text.strip("-")
    return text[:60]


def generate_module_pdf(module):
    """Generate a PDF for a single module."""
    num = module["num"]
    title = module["title"]
    duration = module["duration"]
    objective = module["objective"]

    filename = f"Module-{num:02d}-{slugify(title)}.pdf"
    filepath = os.path.join(OUTPUT_DIR, filename)

    doc = SimpleDocTemplate(
        filepath,
        pagesize=A4,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
    )

    styles = get_styles()
    story = []

    # ---- Title Page ----
    story.append(Spacer(1, 50 * mm))
    story.append(Paragraph(f"MODULE {num}", styles["ModuleNum"]))
    story.append(Paragraph(escape_xml(title), styles["ModuleTitle"]))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph(f"Dur\u00e9e : {escape_xml(duration)}", styles["Duration"]))
    story.append(Spacer(1, 10 * mm))

    # Decorative line as a thin table
    line_table = Table([[""]], colWidths=[70 * mm])
    line_table.setStyle(TableStyle([
        ("LINEABOVE", (0, 0), (-1, 0), 2, CYAN),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(line_table)
    story.append(Spacer(1, 10 * mm))
    story.append(Paragraph("Par Tino Le Doc", styles["Author"]))

    story.append(PageBreak())

    # ---- Objectif ----
    story.append(Paragraph("Objectif", styles["SectionTitle"]))
    story.append(Paragraph(escape_xml(objective), styles["ObjectiveText"]))
    story.append(Spacer(1, 10 * mm))

    # ---- Prompts ----
    if module["prompts"]:
        story.append(Paragraph("Prompts", styles["SectionTitle"]))
        story.append(Spacer(1, 3 * mm))

        for ptitle, pcontent in module["prompts"]:
            # Prompt content in a styled box
            code_lines = pcontent.split("\n")
            code_text = "<br/>".join(escape_xml(line) for line in code_lines)
            code_para = Paragraph(code_text, styles["PromptCode"])

            # Wrap in a table for the box effect
            prompt_table = Table([[code_para]], colWidths=[170 * mm])
            prompt_table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), BG_BOX),
                ("BOX", (0, 0), (-1, -1), 0.5, BORDER_BOX),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LINEBEFOREDECOR", (0, 0), (0, -1), 3, CYAN),
            ]))
            story.append(KeepTogether([
                Paragraph(escape_xml(ptitle), styles["PromptTitle"]),
                prompt_table,
            ]))
            story.append(Spacer(1, 4 * mm))

    # ---- Last Page ----
    story.append(PageBreak())
    story.append(Spacer(1, 60 * mm))
    story.append(Paragraph("Formation IA au Quotidien", styles["FooterText"]))
    story.append(Paragraph("Par Tino Le Doc", styles["FooterText"]))
    story.append(Paragraph("\u00a9 Tous droits r\u00e9serv\u00e9s", styles["FooterText"]))

    # Build with header/footer
    def on_page(canvas, doc_obj):
        make_header_footer(canvas, doc_obj, num)

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"  [OK] {filename}")
    return filepath


def main():
    src = "/home/user/faut-il-tout-remplacer-par-l-ia/PDFs/formation-ia-scripts-modules.md"
    print("Parsing formation content...")
    modules = parse_formation_file(src)
    print(f"Found {len(modules)} modules.\n")

    print("Generating PDFs (without video scripts)...")
    generated = []
    for m in modules:
        path = generate_module_pdf(m)
        generated.append(path)

    print(f"\nDone! {len(generated)} PDFs generated in:\n  {OUTPUT_DIR}/")
    print("\nFiles:")
    for p in generated:
        print(f"  - {os.path.basename(p)}")


if __name__ == "__main__":
    main()
