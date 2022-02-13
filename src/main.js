const { BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    title: 'SGQ_System',
    width: 800,
    height: 600,
    center: true,
    webPreferences: {
      nodeIntegration: false,
    },
  });
  win.loadFile('src/index.html');
}

module.exports = { createWindow };
