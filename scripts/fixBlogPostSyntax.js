const fs = require('fs');
const path = require('path');

// Read the blog posts file
const filePath = path.join(__dirname, '../data/blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix the missing commas between blog post objects
// Look for patterns where there's a closing brace followed by a newline and an opening brace
// This indicates a missing comma between objects
const pattern = /(\s*\}\s*)\n(\s*\{\s*\n\s*slug:)/g;
const fixedContent = content.replace(pattern, '$1,\n$2');

// Write the fixed content back to the file
fs.writeFileSync(filePath, fixedContent, 'utf-8');

console.log('Fixed missing commas in blog-posts.ts file');