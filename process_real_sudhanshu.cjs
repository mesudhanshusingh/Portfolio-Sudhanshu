const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPortrait = 'C:/Users/sudha/.gemini/antigravity/brain/da4f70e0-4a3f-4a1f-b227-a04f34d1ba15/sudhanshu_hero_portrait_1788024402848.jpg';
const destJPG = path.join(__dirname, 'public/assets/real_sudhanshu_hero.jpg');
const destCutout = path.join(__dirname, 'public/assets/real_sudhanshu_cutout.png');

fs.copyFileSync(inputPortrait, destJPG);
console.log('Real Sudhanshu hero portrait copied to public/assets/real_sudhanshu_hero.jpg');

sharp(inputPortrait).metadata().then(meta => {
  const w = meta.width;
  const h = meta.height;

  // Mask focusing on half-body portrait with smooth alpha fade into black background
  const svgMask = `<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="50%" cy="48%" r="48%">
        <stop offset="72%" stop-color="white" stop-opacity="1"/>
        <stop offset="90%" stop-color="white" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
      <mask id="m">
        <rect width="${w}" height="${h}" fill="url(#g)"/>
      </mask>
    </defs>
    <rect width="${w}" height="${h}" fill="white" mask="url(#m)"/>
  </svg>`;

  sharp(Buffer.from(svgMask))
    .png()
    .toBuffer()
    .then(maskBuf => {
      sharp(inputPortrait)
        .ensureAlpha()
        .composite([{ input: maskBuf, blend: 'dest-in' }])
        .toFile(destCutout)
        .then(res => console.log('Real Sudhanshu cutout PNG created:', res));
    });
});
