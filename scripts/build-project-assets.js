const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const userDir = 'C:/Users/Original Diaa/.gemini/antigravity-ide/brain/91fb9793-7547-4179-b198-747252b7a711/.user_uploaded';
const workDir = 'd:/stackway/public/images/work';
const showcaseDir = 'd:/stackway/public/images/work/showcase';

if (!fs.existsSync(workDir)) fs.mkdirSync(workDir, { recursive: true });
if (!fs.existsSync(showcaseDir)) fs.mkdirSync(showcaseDir, { recursive: true });

async function createShowcase(logoPath, outShowcasePath, outLogoPath, bgColor, glowColor, titleEn) {
  // 1. Generate clean, crisp square logo badge (256x256)
  await sharp(logoPath)
    .resize(256, 256, { fit: 'contain', background: { r: 5, g: 6, b: 10, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(outLogoPath);

  // XML escape titleEn
  const safeTitleEn = titleEn.replace(/&/g, '&amp;');

  // 2. Generate composite showcase card (1200x800)
  const bgSvg = Buffer.from(`
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.32"/>
          <stop offset="65%" stop-color="${bgColor}" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#05060a" stop-opacity="1"/>
        </radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        </pattern>
        <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.12)" stop-opacity="0.2"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="#05060a"/>
      <rect width="1200" height="800" fill="url(#glow)"/>
      <rect width="1200" height="800" fill="url(#grid)"/>

      <circle cx="600" cy="400" r="320" fill="none" stroke="${glowColor}" stroke-opacity="0.18" stroke-dasharray="6 6"/>
      <circle cx="600" cy="400" r="360" fill="none" stroke="${glowColor}" stroke-opacity="0.08"/>

      <rect x="360" y="160" width="480" height="480" rx="36" fill="#080d14" fill-opacity="0.8" stroke="url(#cardBorder)" stroke-width="1.5"/>

      <text x="600" y="110" font-family="monospace" font-size="14" fill="${glowColor}" letter-spacing="4" text-anchor="middle" font-weight="bold">// STACKWAY VERIFIED PLATFORM</text>
      <text x="600" y="700" font-family="monospace" font-size="13" fill="#9ca3af" letter-spacing="2" text-anchor="middle">${safeTitleEn}</text>
    </svg>
  `);

  const resizedLogo = await sharp(logoPath)
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(bgSvg)
    .composite([
      {
        input: resizedLogo,
        top: 190,
        left: 390
      }
    ])
    .webp({ quality: 85 })
    .toFile(outShowcasePath);

  console.log('Processed:', path.basename(outShowcasePath), 'and', path.basename(outLogoPath));
}

async function run() {
  try {
    // 1. Kunuz Real Estate
    await createShowcase(
      path.join(userDir, 'media_1791887796175.jpg'),
      path.join(showcaseDir, 'kunuz.webp'),
      path.join(workDir, 'kunuz.webp'),
      '#0d222d',
      '#34d1d1',
      'KUNUZ REAL ESTATE // BADR CITY'
    );

    // 2. Team HM System (Human Machines)
    await createShowcase(
      path.join(userDir, 'media_1791887836769.jpg'),
      path.join(showcaseDir, 'team-hm.webp'),
      path.join(workDir, 'team-hm.webp'),
      '#1a080c',
      '#ff334b',
      'HUMAN MACHINES // TEAM HM COACHING SAAS'
    );

    // 3. Hossam Mansour Official Website (Human Machines)
    await createShowcase(
      path.join(userDir, 'media_1791887836769.jpg'),
      path.join(showcaseDir, 'hossam-mansour.webp'),
      path.join(workDir, 'hossam-mansour.webp'),
      '#1a080c',
      '#ff334b',
      'HOSSAM MANSOUR WORLD CHAMPION OFFICIAL'
    );

    // 4. Al-Tawheed Supermarket
    await createShowcase(
      path.join(userDir, 'media_1791887742201.png'),
      path.join(showcaseDir, 'al-tawheed.webp'),
      path.join(workDir, 'al-tawheed.webp'),
      '#1c1408',
      '#ff8c00',
      'AL TAWHID SUPERMARKET AND DAIRY'
    );

    // 5. El Gendy / El Ghandy Educational Center
    await createShowcase(
      path.join(userDir, 'media_1791887087220.jpg'),
      path.join(showcaseDir, 'elgendy.webp'),
      path.join(workDir, 'elgendy.webp'),
      '#081428',
      '#2563eb',
      'MR. MOHAMED EL GHANDY CENTER LMS'
    );

    // 6. Regalest / Emperor Royal Luxury Store
    await createShowcase(
      path.join(userDir, 'media_1791888535170.jpg'),
      path.join(showcaseDir, 'regalest.webp'),
      path.join(workDir, 'regalest.webp'),
      '#1a1408',
      '#d4af37',
      'REGALEST // EMPEROR LUXURY TIMEPIECES'
    );

    console.log('SUCCESS: All authentic assets processed successfully!');
  } catch (err) {
    console.error('Error processing assets:', err);
  }
}

run();
