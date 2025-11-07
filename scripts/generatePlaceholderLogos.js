const fs = require('fs');
const path = require('path');

// Function to generate a simple PNG placeholder using base64 encoded data
function generatePlaceholderPng(name) {
  // This is a 1x1 transparent PNG as a base64 string
  // In a real implementation, you would generate a proper PNG with text
  // For now, we'll use a simple base64 encoded transparent PNG
  return Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==', 'base64');
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

// Create the logos
logosToCreate.forEach(logoName => {
  const logoPath = path.join(__dirname, '..', 'public', 'logos', logoName);
  const pngData = generatePlaceholderPng(logoName);
  
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