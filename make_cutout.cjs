const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const input = 'C:/Users/sudha/.gemini/antigravity/brain/da4f70e0-4a3f-4a1f-b227-a04f34d1ba15/developer_character_1788012831769.jpg';
const destScene = path.join(__dirname, 'public/assets/developer_scene.jpg');
const destCutout = path.join(__dirname, 'public/assets/character_cutout.png');

fs.copyFileSync(input, destScene);
console.log('Original starting image copied to public/assets/developer_scene.jpg');

sharp(input).metadata().then(meta => {
  const w = meta.width;
  const h = meta.height;
  const svgMask = `<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="50%" cy="48%" r="46%">
        <stop offset="65%" stop-color="white" stop-opacity="1"/>
        <stop offset="85%" stop-color="white" stop-opacity="0.5"/>
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
      sharp(input)
        .ensureAlpha()
        .composite([{ input: maskBuf, blend: 'dest-in' }])
        .toFile(destCutout)
        .then(res => console.log('Original cutout PNG restored:', res));
    });
});
