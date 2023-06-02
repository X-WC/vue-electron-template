const {app, BrowserWindow} = require('electron')
const {createLoadWindows} = require('./windows/loadWindows.js');

app.whenReady().then(() => {
    createLoadWindows(BrowserWindow);
})
