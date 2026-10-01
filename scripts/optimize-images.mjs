import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  console.log('🚀 Starting image optimization via Sharp...');

  // 1. App icons & favicons
  const appIcons = [
    { src: './app/apple-icon.png', size: 180 },
    { src: './app/icon.png', size: 192 },
    { src: './public/favicon.png', size: 192 },
    { src: './public/logo-black.png', size: 512 }
  ];

  for (const item of appIcons) {
    if (fs.existsSync(item.src)) {
      const buffer = await sharp(item.src)
        .resize(item.size, item.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 80, compressionLevel: 9 })
        .toBuffer();
      fs.writeFileSync(item.src, buffer);
      console.log(`Updated ${item.src} -> resized to ${item.size}x${item.size}, size: ${buffer.length} bytes`);
    }
  }

  // 2. Logo black WebP
  if (fs.existsSync('./public/logo-black.png')) {
    await sharp('./public/logo-black.png')
      .webp({ quality: 85 })
      .toFile('./public/logo-black.webp');
    console.log('Created ./public/logo-black.webp');
  }

  // 3. OG Image
  if (fs.existsSync('./public/og-image.png')) {
    const ogBuf = await sharp('./public/og-image.png')
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();
    fs.writeFileSync('./public/og-image.jpg', ogBuf);
    console.log(`Updated ./public/og-image.jpg (${ogBuf.length} bytes)`);
  }

  // Helper to process directory
  async function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir, { recursive: true });
    for (const rel of files) {
      const fullPath = path.join(dir, rel);
      const stat = fs.statSync(fullPath);
      if (stat.isFile() && /\.(png|jpg|jpeg)$/i.test(fullPath)) {
        const ext = path.extname(fullPath);
        const webpPath = fullPath.substring(0, fullPath.length - ext.length) + '.webp';
        
        try {
          // Create WebP version
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);

          // Also compress original PNG/JPG in place
          const buf = await sharp(fullPath)
            .png({ quality: 80, compressionLevel: 9 })
            .jpeg({ quality: 80 })
            .toBuffer();
          fs.writeFileSync(fullPath, buf);
          console.log(`Optimized ${fullPath} -> WebP & compressed original`);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err.message);
        }
      }
    }
  }

  await processDir('./public/blog');
  await processDir('./public/images');
  await processDir('./public/projects');

  console.log('✅ Image optimization complete!');
}

optimizeImages().catch(console.error);
