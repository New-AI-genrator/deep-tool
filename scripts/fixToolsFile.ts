import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the tools.ts file
const toolsFilePath = path.join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');

// Fix the structural issues
// 1. Replace incorrect patterns where objects are not properly opened
const fixes = [
  // Fix for the AI Art Generation tools structure
  {
    pattern: /    \}],\s+category: 'Creative & Design',\s+categorySlug: 'creative-design',\s+subcategory: 'AI Art Generation',\s+subcategorySlug: 'ai-art-generation',/g,
    replacement: '    },\n    {\n      category: \'Creative & Design\',\n      categorySlug: \'creative-design\',\n      subcategory: \'AI Art Generation\',\n      subcategorySlug: \'ai-art-generation\','
  },
  // Fix for the Writing Tools structure
  {
    pattern: /    \}],\s+category: 'Content Creation',\s+categorySlug: 'content-creation',\s+subcategory: 'Writing Tools',\s+subcategorySlug: 'writing-tools',/g,
    replacement: '    },\n    {\n      category: \'Content Creation\',\n      categorySlug: \'content-creation\',\n      subcategory: \'Writing Tools\',\n      subcategorySlug: \'writing-tools\','
  }
];

// Apply fixes
for (const fix of fixes) {
  toolsContent = toolsContent.replace(fix.pattern, fix.replacement);
}

// Fix apostrophes in descriptions
toolsContent = toolsContent.replace(/It's/g, "It\\'s");
toolsContent = toolsContent.replace(/don't/g, "don\\'t");
toolsContent = toolsContent.replace(/let's/g, "let\\'s");
toolsContent = toolsContent.replace(/that's/g, "that\\'s");
toolsContent = toolsContent.replace(/here's/g, "here\\'s");
toolsContent = toolsContent.replace(/what's/g, "what\\'s");
toolsContent = toolsContent.replace(/who's/g, "who\\'s");
toolsContent = toolsContent.replace(/can't/g, "can\\'t");
toolsContent = toolsContent.replace(/won't/g, "won\\'t");
toolsContent = toolsContent.replace(/isn't/g, "isn\\'t");
toolsContent = toolsContent.replace(/aren't/g, "aren\\'t");
toolsContent = toolsContent.replace(/wasn't/g, "wasn\\'t");
toolsContent = toolsContent.replace(/weren't/g, "weren\\'t");
toolsContent = toolsContent.replace(/haven't/g, "haven\\'t");
toolsContent = toolsContent.replace(/hasn't/g, "hasn\\'t");
toolsContent = toolsContent.replace(/hadn't/g, "hadn\\'t");
toolsContent = toolsContent.replace(/doesn't/g, "doesn\\'t");
toolsContent = toolsContent.replace(/didn't/g, "didn\\'t");
toolsContent = toolsContent.replace(/couldn't/g, "couldn\\'t");
toolsContent = toolsContent.replace(/shouldn't/g, "shouldn\\'t");
toolsContent = toolsContent.replace(/wouldn't/g, "wouldn\\'t");
toolsContent = toolsContent.replace(/you're/g, "you\\'re");
toolsContent = toolsContent.replace(/we're/g, "we\\'re");
toolsContent = toolsContent.replace(/they're/g, "they\\'re");
toolsContent = toolsContent.replace(/i'm/g, "I\\'m");
toolsContent = toolsContent.replace(/he's/g, "he\\'s");
toolsContent = toolsContent.replace(/she's/g, "she\\'s");
toolsContent = toolsContent.replace(/it's/g, "it\\'s");
toolsContent = toolsContent.replace(/dall-e/g, "DALL-E");
toolsContent = toolsContent.replace(/dall·e/g, "DALL·E");

// Write the fixed content back to the file
fs.writeFileSync(toolsFilePath, toolsContent);

console.log('Successfully fixed structural issues and apostrophes in tools.ts');