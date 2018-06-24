const electron = require('electron');
const {app, BrowserWindow} = require('electron');


let window;

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
    })
    window.loadURL("https://www.bbc.com/education");
}

app.on('ready', createWindow);