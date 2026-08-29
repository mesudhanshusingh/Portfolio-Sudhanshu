const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputStanding = 'C:/Users/sudha/.gemini/antigravity/brain/da4f70e0-4a3f-4a1f-b227-a04f34d1ba15/hero_standing_3d_developer_1788023691759.jpg';
const destScene = path.join(__dirname, 'public/assets/developer_scene.jpg');
const destRoomBg = path.join(__dirname, 'public/assets/coder_room_bg.jpg');
const destCharacter = path.join(__dirname, 'public/assets/lobby_character.png');

fs.copyFileSync(inputStanding, destScene);
console.log('Standing developer scene copied to public/assets/developer_scene.jpg');

// 1. Prepare Room Background
sharp(inputStanding)
  .modulate({ brightness: 0.85, saturation: 1.15 })
  .toFile(destRoomBg)
  .then(() => console.log('Standing room background created:', destRoomBg));

// 2. Prepare Standing AAA Lobby Character Cutout with soft alpha vignette
sharp(inputStanding).metadata().then(meta => {
  const w = meta.width;
  const h = meta.height;

  const svgMask = `<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="52%" cy="50%" r="45%">
        <stop offset="68%" stop-color="white" stop-opacity="1"/>
        <stop offset="88%" stop-color="white" stop-opacity="0.5"/>
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
      sharp(inputStanding)
        .ensureAlpha()
        .composite([{ input: maskBuf, blend: 'dest-in' }])
        .toFile(destCharacter)
        .then(res => console.log('Standing character cutout PNG created:', res));
    });
});
