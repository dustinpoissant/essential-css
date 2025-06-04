#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check for watch flag
const isWatchMode = process.argv.includes('--watch');

if (isWatchMode) {
  console.log('👀 Watch mode enabled - monitoring CSS files for changes...\n');
} else {
  console.log('🚀 Building Essential CSS...\n');
}

// Define input and output files
const inputFiles = [
  'essential.css',
  'essential-hljs.css'
];

const outputDir = 'dist';
const outputFiles = [
  'essential.min.css',
  'essential-hljs.min.css'
];

// Create dist directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
  console.log(`✅ Created ${outputDir}/ directory`);
}

// Minify each CSS file
inputFiles.forEach((inputFile, index) => {
  const outputFile = path.join(outputDir, outputFiles[index]);
  
  try {
    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.log(`⚠️  Skipping ${inputFile} (file not found)`);
      return;
    }

    // Get file size before minification
    const originalSize = fs.statSync(inputFile).size;

    // Minify the CSS using clean-css-cli
    console.log(`📦 Minifying ${inputFile}...`);
    execSync(`npx cleancss -o ${outputFile} ${inputFile}`, { stdio: 'inherit' });

    // Get file size after minification
    const minifiedSize = fs.statSync(outputFile).size;
    const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${inputFile} → ${outputFile}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   Minified: ${(minifiedSize / 1024).toFixed(1)}KB`);
    console.log(`   Savings: ${savings}%\n`);

  } catch (error) {
    console.error(`❌ Error minifying ${inputFile}:`, error.message);
  }
});

console.log('🎉 Build complete!');
console.log(`📁 Minified files are in the ${outputDir}/ directory`);

// Watch mode functionality
if (isWatchMode) {
  console.log('🔍 Watching for changes... (Press Ctrl+C to stop)\n');
  
  inputFiles.forEach(inputFile => {
    if (fs.existsSync(inputFile)) {
      fs.watchFile(inputFile, { interval: 1000 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
          console.log(`\n📝 ${inputFile} changed, rebuilding...`);
          
          // Find the corresponding output file
          const index = inputFiles.indexOf(inputFile);
          const outputFile = path.join(outputDir, outputFiles[index]);
          
          try {
            const originalSize = fs.statSync(inputFile).size;
            console.log(`📦 Minifying ${inputFile}...`);
            execSync(`npx cleancss -o ${outputFile} ${inputFile}`, { stdio: 'inherit' });
            
            const minifiedSize = fs.statSync(outputFile).size;
            const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
            
            console.log(`✅ ${inputFile} → ${outputFile}`);
            console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
            console.log(`   Minified: ${(minifiedSize / 1024).toFixed(1)}KB`);
            console.log(`   Savings: ${savings}%`);
            console.log('\n👀 Watching for changes...');
          } catch (error) {
            console.error(`❌ Error minifying ${inputFile}:`, error.message);
          }
        }
      });
    }
  });
}