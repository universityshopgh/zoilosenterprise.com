const fs = require('fs');
const path = require('path');

const mappings = {
  'realty/valuation-services/page.tsx': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  'realty/property-management/page.tsx': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
  'realty/property-listings/page.tsx': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
  'realty/commercial-real-estate/page.tsx': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',

  'global/trade-consulting/page.tsx': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
  'global/logistics-and-freight/page.tsx': 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981',
  'global/import-services/page.tsx': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec',
  'global/export-solutions/page.tsx': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da',

  'foundation/donation-portal/page.tsx': 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
  'foundation/our-programs/page.tsx': 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
  'foundation/support-a-child/page.tsx': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
  'foundation/volunteer/page.tsx': 'https://images.unsplash.com/photo-1584515933487-779824d29309'
};

Object.entries(mappings).forEach(([relPath, unsplashUrl]) => {
  const fullPath = path.join(__dirname, 'app', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/backgroundImage:\s*'url\([^)]+\)'/, `backgroundImage: 'url("${unsplashUrl}")'`);
    fs.writeFileSync(fullPath, content);
    console.log('Updated ' + relPath);
  }
});
