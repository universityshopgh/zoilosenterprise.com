const fs = require('fs');
const path = require('path');

const realtyImages = [
  '/realty_unreal1.jpg',
  '/realty_unreal2.jpg',
  '/realty_unreal3.jpg',
  '/realty_unreal4.jpg'
];

const globalImages = [
  '/import_export1.jpg',
  '/import_export2.jpg',
  '/import_export3.jpg',
  '/import_export4.jpg'
];

const foundationImages = [
  '/orphanage_unreal1.jpg',
  '/orphnage_unreal2.jpg',
  '/orphanage_unreal3.jpg',
  '/orphange_unreal4.jpg'
];

let realtyIndex = 0;
let globalIndex = 0;
let foundationIndex = 0;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Regex to match Unsplash URLs
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[a-zA-Z0-9-=&?]+/g;
  
  if (regex.test(newContent)) {
    newContent = newContent.replace(regex, () => {
      if (filePath.includes('realty') || filePath.includes('Home')) {
        const img = realtyImages[realtyIndex % realtyImages.length];
        realtyIndex++;
        return img;
      } else if (filePath.includes('global') || filePath.includes('gallery')) {
        const img = globalImages[globalIndex % globalImages.length];
        globalIndex++;
        return img;
      } else if (filePath.includes('foundation')) {
        const img = foundationImages[foundationIndex % foundationImages.length];
        foundationIndex++;
        return img;
      } else {
        const img = realtyImages[realtyIndex % realtyImages.length];
        realtyIndex++;
        return img;
      }
    });
    
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated images in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
        processFile(fullPath);
      }
    }
  }
}

walkDir(path.join(__dirname, 'app'));
console.log('Finished updating images.');
