#!/usr/bin/env node

/**
 * Script to remove duplicate tools from the tools.ts file
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the tools.ts file
const toolsFilePath = path.join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');

// Function to remove duplicates from an array while preserving order
function removeDuplicates(arr) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });
}

// For this specific case, we'll manually remove the duplicates
// We need to find and remove the duplicate entries for:
// 1. Gitea (2 copies, keep 1)
// 2. Phabricator (2 copies, keep 1)
// 3. RhodeCode (2 copies, keep 1)
// 4. Datadog (2 copies, keep 1)
// 5. New Relic (2 copies, keep 1)
// 6. Grafana (2 copies, keep 1)

console.log('Removing duplicate tools...');

// Remove duplicate Gitea entry (keep the first one)
const giteaPattern = /,\s*\{\s*name: 'Gitea'[^}]*\}\s*,\s*\{\s*name: 'Gitea'[^}]*\}/s;
toolsContent = toolsContent.replace(giteaPattern, (match) => {
  // Keep only the first Gitea entry
  const firstGiteaEnd = match.indexOf('},', match.indexOf('name: \'Gitea\'')) + 2;
  return match.substring(0, firstGiteaEnd);
});

// Remove duplicate Phabricator entry (keep the first one)
const phabricatorPattern = /,\s*\{\s*name: 'Phabricator'[^}]*\}\s*,\s*\{\s*name: 'Phabricator'[^}]*\}/s;
toolsContent = toolsContent.replace(phabricatorPattern, (match) => {
  // Keep only the first Phabricator entry
  const firstPhabricatorEnd = match.indexOf('},', match.indexOf('name: \'Phabricator\'')) + 2;
  return match.substring(0, firstPhabricatorEnd);
});

// Remove duplicate RhodeCode entry (keep the first one)
const rhodeCodePattern = /,\s*\{\s*name: 'RhodeCode'[^}]*\}\s*,\s*\{\s*name: 'RhodeCode'[^}]*\}/s;
toolsContent = toolsContent.replace(rhodeCodePattern, (match) => {
  // Keep only the first RhodeCode entry
  const firstRhodeCodeEnd = match.indexOf('},', match.indexOf('name: \'RhodeCode\'')) + 2;
  return match.substring(0, firstRhodeCodeEnd);
});

// Remove duplicate Datadog entry (keep the first one)
const datadogPattern = /,\s*\{\s*name: 'Datadog'[^}]*\}\s*,\s*\{\s*name: 'Datadog'[^}]*\}/s;
toolsContent = toolsContent.replace(datadogPattern, (match) => {
  // Keep only the first Datadog entry
  const firstDatadogEnd = match.indexOf('},', match.indexOf('name: \'Datadog\'')) + 2;
  return match.substring(0, firstDatadogEnd);
});

// Remove duplicate New Relic entry (keep the first one)
const newRelicPattern = /,\s*\{\s*name: 'New Relic'[^}]*\}\s*,\s*\{\s*name: 'New Relic'[^}]*\}/s;
toolsContent = toolsContent.replace(newRelicPattern, (match) => {
  // Keep only the first New Relic entry
  const firstNewRelicEnd = match.indexOf('},', match.indexOf('name: \'New Relic\'')) + 2;
  return match.substring(0, firstNewRelicEnd);
});

// Remove duplicate Grafana entry (keep the first one)
const grafanaPattern = /,\s*\{\s*name: 'Grafana'[^}]*\}\s*,\s*\{\s*name: 'Grafana'[^}]*\}/s;
toolsContent = toolsContent.replace(grafanaPattern, (match) => {
  // Keep only the first Grafana entry
  const firstGrafanaEnd = match.indexOf('},', match.indexOf('name: \'Grafana\'')) + 2;
  return match.substring(0, firstGrafanaEnd);
});

// Write the modified content back to the file
fs.writeFileSync(toolsFilePath, toolsContent);
console.log('Duplicate tools removed successfully!');