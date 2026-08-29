const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPure = 'C:/Users/sudha/.gemini/antigravity/brain/da4f70e0-4a3f-4a1f-b227-a04f34d1ba15/pure_3d_hero_standing_1788023964999.jpg';
const destJPG = path.join(__dirname, 'public/assets/pure_hero_3d.jpg');
const destCutout = path.join(__dirname, 'public/assets/pure_hero_cutout.png');

fs.copyFileSync(inputPure, destJPG);
console.log('Pure hero JPG copied to public/assets/pure_hero_3d.jpg');

sharp(inputPure).metadata().then(meta => {
  const w = meta.width;
  const h = meta.height;

  // Mask focusing on standing character silhouette with smooth alpha fade on black background
  const svgMask = `<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="48%">
        <stop offset="70%" stop-color="white" stop-opacity="1"/>
        <stop offset="90%" stop-color="white" stop-opacity="0.6"/>
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
      sharp(inputPure)
        .ensureAlpha()
        .composite([{ input: maskBuf, blend: 'dest-in' }])
        .toFile(destCutout)
        .then(res => console.log('Pure hero cutout PNG created:', res));
    });
});
