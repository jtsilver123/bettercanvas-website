import sharp from 'sharp';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Read the SVG file
const svgBuffer = readFileSync(join(projectRoot, 'public', 'og-image.svg'));

// Convert to JPG
sharp(svgBuffer)
  .resize(1200, 630)
  .jpeg({
    quality: 90,
    progressive: true
  })
  .toFile(join(projectRoot, 'public', 'og-image.jpg'))
  .then(() => console.log('Generated og-image.jpg'))
  .catch(err => console.error('Error generating og-image:', err)); 