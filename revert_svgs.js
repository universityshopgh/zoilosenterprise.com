const fs = require('fs');
const path = require('path');

const svgMap = {
  // Realty Commercial
  'Office Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 21V7l8-4v18" fill="currentColor" fillOpacity="0.1"/><path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M19 21V11l-6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h2M9 13h2M9 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,
  'Retail Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 6h18l-2 13H5L3 6z" fill="currentColor" fillOpacity="0.1"/><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,
  'Industrial Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>`,

  // Realty Valuation
  'Portfolio Valuation Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/><path d="M9 21V9" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Market Analysis Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 21l3-9 3 9 3-9 3 9 3-9v9H3z" fill="currentColor" fillOpacity="0.1"/><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>`,
  'Tax and Litigation Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9.5 12h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,

  // Global Export
  'Market Penetration Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" fill="currentColor" fillOpacity="0.1"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="1.5"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Freight Consolidation Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Trade Finance Support Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,

  // Global Trade Consulting
  'Market Entry Strategy Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.1"/><polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" strokeWidth="1.5"/><polyline points="2 17 12 22 22 17" stroke="currentColor" strokeWidth="1.5"/><polyline points="2 12 12 17 22 12" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Regulatory Compliance Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.1"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Supply Chain Finance Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9.5 12h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,

  // Foundation Donation
  'One-Time Gift Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,
  'Monthly Partnership Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.44l5.67-5.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>`,
  'Corporate Matching Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" fillOpacity="0.1"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>`,

  // Foundation Support a child
  'Education Tier Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" fill="currentColor" fillOpacity="0.1"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5"/></svg>`,
  'Health Tier Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>`,
  'Full Support Tier Icon': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fillOpacity="0.1"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5"/></svg>`
};

const dirs = [
  'app/realty/commercial-real-estate/page.tsx',
  'app/realty/valuation-services/page.tsx',
  'app/global/export-solutions/page.tsx',
  'app/global/trade-consulting/page.tsx',
  'app/foundation/donation-portal/page.tsx',
  'app/foundation/support-a-child/page.tsx'
];

dirs.forEach(rel => {
  const full = path.join(__dirname, rel);
  if (fs.existsSync(full)) {
    let content = fs.readFileSync(full, 'utf8');
    // Replace <img src="..." alt="X Icon" /> with svgMap["X Icon"]
    content = content.replace(/<img[^>]+alt="([^"]+)"[^>]*>/g, (match, altText) => {
      if (svgMap[altText]) {
        return svgMap[altText];
      }
      return match; // fallback
    });
    fs.writeFileSync(full, content);
    console.log('Reverted SVGs in ' + rel);
  }
});

// Also remove `overflow: hidden;` and `.cardIcon img` from subpage.module.css
const cssPath = path.join(__dirname, 'app/subpage.module.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  css = css.replace(/overflow:\s*hidden;/g, '');
  css = css.replace(/\.cardIcon img \{[\s\S]*?\}/g, '');
  fs.writeFileSync(cssPath, css);
}
