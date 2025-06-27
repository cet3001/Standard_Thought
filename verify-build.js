
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build output...\n');

const distPath = path.join(__dirname, 'dist');
const filesToCheck = [
  '_headers',
  '_redirects', 
  'robots.txt',
  'sitemap_index.xml',
  'page-sitemap.xml',
  'googlea59634ea3ae6e4ed.html',
  '404.html'
];

let allPresent = true;

console.log('Checking for required files in dist/:\n');

filesToCheck.forEach(file => {
  const filePath = path.join(distPath, file);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${stats.size} bytes)`);
    
    // Check if _headers has content
    if (file === '_headers' && stats.size === 0) {
      console.log(`⚠️  ${file} is empty - headers won't work`);
    }
  } else {
    console.log(`❌ ${file} - MISSING`);
    allPresent = false;
  }
});

// Check _headers content specifically
const headersPath = path.join(distPath, '_headers');
if (fs.existsSync(headersPath)) {
  const headersContent = fs.readFileSync(headersPath, 'utf8');
  console.log('\n📋 _headers content:');
  if (headersContent.trim()) {
    console.log(headersContent);
  } else {
    console.log('(empty file - this will cause issues)');
    allPresent = false;
  }
}

console.log('\n' + '='.repeat(50));

if (allPresent) {
  console.log('✅ All required files are present in dist/');
  console.log('\nNext steps:');
  console.log('1. Deploy to Netlify');
  console.log('2. Clear Netlify cache');
  console.log('3. Test headers with: curl -I https://www.standardthought.com/robots.txt');
} else {
  console.log('❌ Some files are missing from dist/');
  console.log('\nTroubleshooting:');
  console.log('1. Ensure files are in public/ directory');
  console.log('2. Run npm run build again');
  console.log('3. Check Vite configuration');
}

console.log('\n');
