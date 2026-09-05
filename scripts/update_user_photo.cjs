const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadedPhoto = 'C:/Users/sudha/.gemini/antigravity/brain/da4f70e0-4a3f-4a1f-b227-a04f34d1ba15/.user_uploaded/media_1788601265120.jpg';

const targetJPG = path.join(__dirname, 'public/assets/real_sudhanshu_hero.jpg');
const targetCutout = path.join(__dirname, 'public/assets/real_sudhanshu_cutout.png');
const targetAvatar = path.join(__dirname, 'public/assets/developer_character.jpg');
const targetTSProfile = 'D:/Desktop/My Portfolio/public/sudhanshu_profile.jpg';

fs.copyFileSync(uploadedPhoto, targetJPG);
fs.copyFileSync(uploadedPhoto, targetAvatar);
if (fs.existsSync(path.dirname(targetTSProfile))) {
  fs.copyFileSync(uploadedPhoto, targetTSProfile);
}

console.log('Copied raw photo to assets & profile destinations.');

sharp(uploadedPhoto).metadata().then(meta => {
  const w = meta.width;
  const h = meta.height;

  const svgMask = `<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="50%" cy="48%" r="48%">
        <stop offset="70%" stop-color="white" stop-opacity="1"/>
        <stop offset="88%" stop-color="white" stop-opacity="0.6"/>
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
      sharp(uploadedPhoto)
        .ensureAlpha()
        .composite([{ input: maskBuf, blend: 'dest-in' }])
        .toFile(targetCutout)
        .then(res => console.log('Successfully generated transparent cutout PNG:', res));
    });
});
