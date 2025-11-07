const fs = require('fs');
const path = require('path');

// Function to extract logo URLs from tool files
function extractLogoUrls() {
  const toolsDir = path.join(__dirname, '..', 'data', 'tools');
  const toolFiles = fs.readdirSync(toolsDir).filter(file => file.endsWith('.ts') && file !== 'index.ts');
  
  const logoUrls = new Set();
  
  toolFiles.forEach(file => {
    const content = fs.readFileSync(path.join(toolsDir, file), 'utf8');
    // Match logoUrl patterns
    const logoMatches = content.match(/logoUrl:\s*['"]([^'"]+)['"]/g);
    if (logoMatches) {
      logoMatches.forEach(match => {
        const urlMatch = match.match(/logoUrl:\s*['"]([^'"]+)['"]/);
        if (urlMatch && urlMatch[1]) {
          logoUrls.add(urlMatch[1]);
        }
      });
    }
  });
  
  return Array.from(logoUrls);
}

// Function to check which logos exist and which don't
function checkMissingLogos(logoUrls) {
  const publicDir = path.join(__dirname, '..', 'public');
  const missingLogos = [];
  
  logoUrls.forEach(logoUrl => {
    // Convert URL path to file system path
    const filePath = path.join(publicDir, logoUrl);
    if (!fs.existsSync(filePath)) {
      missingLogos.push(logoUrl);
    }
  });
  
  return missingLogos;
}

// Function to generate a simple SVG placeholder
function generatePlaceholderSvg(name) {
  // Extract first letter and make it uppercase
  const firstLetter = name.charAt(0).toUpperCase();
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#3b82f6"/>
  <text x="50" y="50" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle" dominant-baseline="central">${firstLetter}</text>
</svg>`;
}

// Function to create missing logo files
function createMissingLogos(missingLogos) {
  const publicDir = path.join(__dirname, '..', 'public');
  let createdCount = 0;
  
  missingLogos.forEach(logoUrl => {
    const filePath = path.join(publicDir, logoUrl);
    const dirName = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true });
    }
    
    // Extract tool name from the path to use for the placeholder
    const fileName = path.basename(logoUrl, path.extname(logoUrl));
    const toolName = fileName.replace(/-ai|-ml/g, '').replace(/-/g, ' ');
    
    // Generate and write the placeholder SVG
    const svgContent = generatePlaceholderSvg(toolName);
    fs.writeFileSync(filePath, svgContent);
    console.log(`Created placeholder logo: ${logoUrl}`);
    createdCount++;
  });
  
  return createdCount;
}

// Main execution
function main() {
  console.log('Extracting logo URLs from tool files...');
  const logoUrls = extractLogoUrls();
  console.log(`Found ${logoUrls.length} unique logo URLs`);
  
  console.log('Checking for missing logos...');
  const missingLogos = checkMissingLogos(logoUrls);
  console.log(`Found ${missingLogos.length} missing logos`);
  
  if (missingLogos.length > 0) {
    console.log('Creating missing logo files...');
    const createdCount = createMissingLogos(missingLogos);
    console.log(`Successfully created ${createdCount} placeholder logo files`);
  } else {
    console.log('All logos are present. No missing logos found.');
  }
}

main();