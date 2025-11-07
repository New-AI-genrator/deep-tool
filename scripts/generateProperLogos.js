const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Function to generate a proper PNG placeholder with text
function generatePlaceholderPng(name) {
  // Create a canvas
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(0, 0, 100, 100);
  
  // Draw text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Extract first letter and make it uppercase
  const firstLetter = name.charAt(0).toUpperCase();
  
  ctx.fillText(firstLetter, 50, 50);
  
  // Convert to buffer
  return canvas.toBuffer('image/png');
}

// List of logos to create based on the error messages
const logosToCreate = [
  'spotify.png',
  'youtube.png',
  'duolingo.png',
  'steam.png',
  'airbnb.png',
  'telegram.png',
  'google-analytics.png',
  'calm.png',
  'apple-music.png',
  'github.png',
  'discord.png',
  'canva.png',
  'docker.png',
  'zoom.png',
  'udemy.png',
  'headspace.png',
  'shopify.png'
];

// Remove existing placeholder files
logosToCreate.forEach(logoName => {
  const logoPath = path.join(__dirname, '..', 'public', 'logos', logoName);
  if (fs.existsSync(logoPath)) {
    fs.unlinkSync(logoPath);
  }
});

// Create the logos
logosToCreate.forEach(logoName => {
  const logoPath = path.join(__dirname, '..', 'public', 'logos', logoName);
  const pngData = generatePlaceholderPng(logoName.replace('.png', ''));
  
  // Ensure the directory exists
  const dirName = path.dirname(logoPath);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  
  // Write the PNG file
  fs.writeFileSync(logoPath, pngData);
  console.log(`Created placeholder logo: ${logoName}`);
});

console.log(`Successfully created ${logosToCreate.length} placeholder logo files`);