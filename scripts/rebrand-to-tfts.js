const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const SCAN_DIRS = ['app', 'components', 'lib'];
const EXTENSIONS = ['.ts', '.tsx', '.json', '.md'];

const EXCLUDE_FILES = [
  'app/admin/login/page.tsx', // Preserve admin login credentials
];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getAllFiles(filePath, fileList);
      }
    } else {
      if (EXTENSIONS.some(ext => file.endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

let modifiedCount = 0;
let replacementLog = [];

for (const dirName of SCAN_DIRS) {
  const dirPath = path.join(ROOT_DIR, dirName);
  if (!fs.existsSync(dirPath)) continue;

  const files = getAllFiles(dirPath);

  for (const filePath of files) {
    const relPath = path.relative(ROOT_DIR, filePath);
    if (EXCLUDE_FILES.includes(relPath)) {
      continue;
    }

    let original = fs.readFileSync(filePath, 'utf8');
    let content = original;

    // 1. Domains
    content = content.replace(/https:\/\/drone\.entirefm\.com/g, 'https://tfts.co.uk');
    content = content.replace(/http:\/\/drone\.entirefm\.com/g, 'https://tfts.co.uk');
    content = content.replace(/drone\.entirefm\.com/g, 'tfts.co.uk');
    content = content.replace(/https:\/\/www\.altitude-hire\.com/g, 'https://tfts.co.uk');
    content = content.replace(/https:\/\/altitude-hire\.com/g, 'https://tfts.co.uk');
    content = content.replace(/altitude-hire\.com/g, 'tfts.co.uk');

    // 2. TFTS 3D Service Rename
    content = content.replace(/Gaussian Splat Drone Capture/g, 'TFTS 3D Capture');
    content = content.replace(/Gaussian Splat Capture/g, 'TFTS 3D Capture');
    content = content.replace(/gaussian splat capture/gi, 'TFTS 3D capture');
    content = content.replace(/3D Gaussian Splat/g, 'TFTS 3D');
    content = content.replace(/3D Gaussian splat/g, 'TFTS 3D');
    content = content.replace(/Gaussian Splatting/g, 'TFTS 3D modelling');
    content = content.replace(/Gaussian splatting/g, 'TFTS 3D modelling');
    content = content.replace(/Gaussian Splat/g, 'TFTS 3D');
    content = content.replace(/Gaussian splat/g, 'TFTS 3D');
    content = content.replace(/gaussian-splat-capture/g, 'tfts-3d');

    // 3. EntireFM -> TFTS Drone
    content = content.replace(/EntireFM Drone Services UK/g, 'TFTS Drone');
    content = content.replace(/EntireFM Drone Services/g, 'TFTS Drone');
    content = content.replace(/EntireFM Drone/g, 'TFTS Drone');
    content = content.replace(/EntireFM drone/g, 'TFTS Drone');
    content = content.replace(/EntireFM's drone/g, "TFTS Drone's");
    content = content.replace(/\| EntireFM Drone/g, '| TFTS Drone');
    content = content.replace(/\| EntireFM/g, '| TFTS Drone');
    content = content.replace(/\| Entire FM/g, '| TFTS Drone');

    // 4. Specific SEO descriptions and titles
    content = content.replace(/EntireFM provides/g, 'TFTS Drone provides');
    content = content.replace(/EntireFM delivers/g, 'TFTS Drone delivers');
    content = content.replace(/EntireFM offers/g, 'TFTS Drone offers');
    content = content.replace(/EntireFM operates/g, 'TFTS Drone operates');
    content = content.replace(/by EntireFM/g, 'by TFTS Drone');
    content = content.replace(/from EntireFM/g, 'from TFTS Drone');

    // 5. Site names
    content = content.replace(/siteName:\s*['"]EntireFM Drone Services['"]/g, "siteName: 'TFTS Drone'");
    content = content.replace(/siteName:\s*['"]EntireFM Drone['"]/g, "siteName: 'TFTS Drone'");
    content = content.replace(/siteName:\s*['"]EntireFM['"]/g, "siteName: 'TFTS Drone'");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      replacementLog.push(relPath);
    }
  }
}

console.log(`\n✅ Migration complete: ${modifiedCount} files updated.`);
