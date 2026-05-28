#!/usr/bin/env python3
"""Compose the three design-iteration screenshots side by side.

Usage: compose_comparison.py [landing|features]   (default: landing)
"""
import sys
from PIL import Image, ImageDraw, ImageFont

TITLES = ["/frontend-design", "Claude Design", "impeccable.style"]
SETS = {
    "landing": ("comparison", ["frontend-design.png", "claude-design.png", "impeccable.png"]),
    "features": ("comparison-features", ["features-frontend-design.png", "features-claude-design.png", "features-impeccable.png"]),
}
mode = sys.argv[1] if len(sys.argv) > 1 else "landing"
out_base, files = SETS[mode]

# --- tweakables ---
COLUMNS = list(zip(files, TITLES))
BG = (10, 10, 11)
TITLE_COLOR = (237, 230, 217)
BORDER_COLOR = (44, 44, 48)
FONT_PATH = "/System/Library/Fonts/SFNSMono.ttf"
FONT_WEIGHT = "Bold"  # Light | Regular | Medium | Semibold | Bold | Heavy
FONT_MAX = 220        # cap; actual size auto-fits longest title to the column
TITLE_PAD = 40        # horizontal breathing room each side of a title
BAND_RATIO = 1.7      # title band height as a multiple of the fitted font size
MARGIN = 80           # outer padding
GUTTER = 56           # space between columns
BORDER = 1
OUT = f"{out_base}.png"
PREVIEW_TOP = f"{out_base}-preview-top.png"
PREVIEW_TOP_H = 1900
THUMB = f"{out_base}-thumb.png"   # simulates LinkedIn/blog feed render
THUMB_W = 600
# -------------------

imgs = [(Image.open(p).convert("RGB"), title) for p, title in COLUMNS]
col_w = imgs[0][0].width
content_h = max(im.height for im, _ in imgs)


def load_font(size):
    f = ImageFont.truetype(FONT_PATH, size)
    try:
        f.set_variation_by_name(FONT_WEIGHT)
    except Exception:
        pass
    return f


def title_w(font, text):
    return font.getbbox(text)[2]


# largest font size at which every title fits within the column
target_w = col_w - 2 * TITLE_PAD
font_size = FONT_MAX
while font_size > 8:
    f = load_font(font_size)
    if all(title_w(f, t) <= target_w for _, t in imgs):
        break
    font_size -= 2
font = load_font(font_size)
title_band = round(font_size * BAND_RATIO)

n = len(imgs)
canvas_w = MARGIN * 2 + n * col_w + (n - 1) * GUTTER
canvas_h = MARGIN + title_band + content_h + MARGIN

canvas = Image.new("RGB", (canvas_w, canvas_h), BG)
draw = ImageDraw.Draw(canvas)

content_top = MARGIN + title_band
for i, (im, title) in enumerate(imgs):
    x = MARGIN + i * (col_w + GUTTER)
    cx = x + col_w // 2
    # title centered in the band above the column
    draw.text((cx, MARGIN + title_band // 2), title, font=font, fill=TITLE_COLOR, anchor="mm")
    # border framing the screenshot (also marks where shorter pages end)
    draw.rectangle(
        [x - BORDER, content_top - BORDER, x + col_w + BORDER - 1, content_top + im.height + BORDER - 1],
        outline=BORDER_COLOR, width=BORDER,
    )
    canvas.paste(im, (x, content_top))

canvas.save(OUT)
canvas.crop((0, 0, canvas_w, PREVIEW_TOP_H)).save(PREVIEW_TOP)
thumb_h = round(canvas_h * THUMB_W / canvas_w)
canvas.resize((THUMB_W, thumb_h), Image.LANCZOS).save(THUMB)
print(f"{OUT}: {canvas_w}x{canvas_h}")
print(f"{PREVIEW_TOP}: {canvas_w}x{PREVIEW_TOP_H}")
print(f"{THUMB}: {THUMB_W}x{thumb_h}")
