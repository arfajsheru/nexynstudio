import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVGL_API_URL = 'https://api.svgl.app/';
const ICONS_DIR = path.join(process.cwd(), 'public', 'icons');

// The exact list of technologies requested and their expected filename
const TARGET_TECHNOLOGIES = [
  { search: 'React', filename: 'react.svg' },
  { search: 'Next.js', filename: 'nextjs.svg' },
  { search: 'TypeScript', filename: 'typescript.svg' },
  { search: 'JavaScript', filename: 'javascript.svg' },
  { search: 'Node.js', filename: 'nodejs.svg' },
  { search: 'Express', filename: 'express.svg', fallbackSearch: 'Express.js' },
  { search: 'PostgreSQL', filename: 'postgresql.svg' },
  { search: 'Prisma', filename: 'prisma.svg' },
  { search: 'MongoDB', filename: 'mongodb.svg' },
  { search: 'Docker', filename: 'docker.svg' },
  { search: 'Git', filename: 'git.svg' },
  { search: 'GitHub', filename: 'github.svg' },
  { search: 'Postman', filename: 'postman.svg' },
  { search: 'AWS', filename: 'aws.svg', fallbackSearch: 'Amazon Web Services' },
  { search: 'Vercel', filename: 'vercel.svg' },
  { search: 'Firebase', filename: 'firebase.svg' },
  { search: 'Tailwind CSS', filename: 'tailwindcss.svg' },
  // SVGL usually doesn't have a separate React Native icon, it shares the React logo
  { search: 'React', filename: 'reactnative.svg' }, 
  { search: 'Expo', filename: 'expo.svg' },
  { search: 'Figma', filename: 'figma.svg' },
  { search: 'OpenAI', filename: 'openai.svg' },
  { search: 'PHP', filename: 'php.svg' },
  { search: 'Java', filename: 'java.svg' },
  { search: 'Python', filename: 'python.svg' },
  { search: 'Vue', filename: 'vue.svg', fallbackSearch: 'Vue.js' },
  { search: 'Angular', filename: 'angular.svg' },
  { search: 'MySQL', filename: 'mysql.svg' }
];

async function fetchSVGLIcons() {
  console.log('Fetching icon metadata from SVGL API...');
  const response = await axios.get(SVGL_API_URL);
  return response.data;
}

function resolveIconUrl(svglItem) {
  if (typeof svglItem.route === 'string') {
    return svglItem.route;
  } else if (typeof svglItem.route === 'object') {
    // Prefer the light mode variant as it's typically the true brand color
    return svglItem.route.light || svglItem.route.dark;
  }
  return null;
}

async function downloadIcon(url, filename) {
  const filePath = path.join(ICONS_DIR, filename);
  
  if (await fs.pathExists(filePath)) {
    return { success: true, filename, skipped: true };
  }

  try {
    const response = await axios.get(url, { responseType: 'text' });
    let svgContent = response.data;
    
    // Ensure we are saving a valid SVG
    if (!svgContent.includes('<svg')) {
      throw new Error('Downloaded content is not a valid SVG');
    }

    await fs.writeFile(filePath, svgContent, 'utf8');
    return { success: true, filename };
  } catch (error) {
    return { success: false, filename, error: error.message };
  }
}

async function main() {
  console.log('--- SVGL Icon Downloader ---\\n');

  // Ensure output directory exists
  await fs.ensureDir(ICONS_DIR);
  console.log(`Directory verified: ${ICONS_DIR}\\n`);

  let svglData = [];
  try {
    svglData = await fetchSVGLIcons();
    console.log(`Successfully fetched ${svglData.length} icon definitions from SVGL.\\n`);
  } catch (error) {
    console.error('❌ Failed to fetch from SVGL API:', error.message);
    process.exit(1);
  }

  const results = {
    total: TARGET_TECHNOLOGIES.length,
    success: 0,
    failed: []
  };

  const downloadPromises = TARGET_TECHNOLOGIES.map(async (target) => {
    // Find matching icon in SVGL data
    let match = svglData.find(item => item.title.toLowerCase() === target.search.toLowerCase());
    
    // Fallback search if provided
    if (!match && target.fallbackSearch) {
      match = svglData.find(item => item.title.toLowerCase() === target.fallbackSearch.toLowerCase());
    }

    if (!match) {
      console.log(`⚠️ Skipped: ${target.filename} (Could not find "${target.search}" in SVGL)`);
      results.failed.push({ filename: target.filename, reason: 'Not found in SVGL API' });
      return;
    }

    const svgUrl = resolveIconUrl(match);
    if (!svgUrl) {
      console.log(`⚠️ Skipped: ${target.filename} (No valid SVG URL found)`);
      results.failed.push({ filename: target.filename, reason: 'No valid SVG URL' });
      return;
    }

    const downloadResult = await downloadIcon(svgUrl, target.filename);
    
    if (downloadResult.success) {
      if (downloadResult.skipped) {
        console.log(`⏭️  Skipped: ${target.filename} (Already exists)`);
      } else {
        console.log(`✅ Downloaded: ${target.filename} (from ${match.title})`);
      }
      results.success++;
    } else {
      console.log(`❌ Failed: ${target.filename} (${downloadResult.error})`);
      results.failed.push({ filename: target.filename, reason: downloadResult.error });
    }
  });

  await Promise.all(downloadPromises);

  // Generate Final Summary
  console.log('\\n--- Summary ---');
  console.log(`Total Requested : ${results.total}`);
  console.log(`Successful      : ${results.success}`);
  console.log(`Failed          : ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\\nFailed Details:');
    results.failed.forEach(f => console.log(` - ${f.filename}: ${f.reason}`));
  }

  console.log('\\nDone!');
}

main().catch(console.error);
