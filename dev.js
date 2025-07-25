const path = require('path');
const { compile } = require('./build');
const { startWatcher } = require('./watcher');

const pagesDir = path.join(__dirname, 'pages');
const stylesFile = path.join(__dirname, 'styles.css');

// Initial compilation using the build script
compile();

// Start the watcher for development
console.log('Starting development mode with file watching...');
startWatcher(pagesDir, stylesFile, compile);
