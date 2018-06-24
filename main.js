const electron = require('electron');
const { app, BrowserWindow, Menu } = require('electron');


let window;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
  })
  window.loadURL("https://www.bbc.com/education");
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on('ready', createWindow);

const menuTemplate = [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quit',
        accelator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  },
  {
    label: 'English',
    submenu:[
      {
        label: 'English Literature',
        click(){
          window.loadURL("https://www.bbc.com/education/examspecs/zxqncwx")
        }
      },
      {
        label: 'English Language',
        click(){
          window.loadURL("https://www.bbc.com/education/examspecs/zcbchv4")
        }
      }
    ]
  },
  {
    label: 'Maths',
    click(){
      window.loadURL("https://www.bbc.com/education/examspecs/z9p3mnb")
    }
  },
  {
    label: 'Science',
    submenu:[
    {
      label: 'Biology',
      click(){
        window.loadURL("https://www.bbc.com/education/examspecs/zpgcbk7")
      }
    },
    {
      label: 'Chemistry',
      click(){
        window.loadURL("https://www.bbc.com/education/examspecs/z8xtmnb")
      }
    },
    {
      label: 'Physics',
      click(){
        window.loadURL("https://www.bbc.com/education/subjects/zpm6fg8")
      }
    }
    ]
  },
  {
    label:'Computer Science',
    click(){
      window.loadURL("https://www.bbc.com/education/examspecs/z9p3mnb")
    }
  },
  {
    label: 'Music',
    click(){
      window.loadURL("https://www.bbc.com/education/subjects/zpf3cdm")
    }
  }
]