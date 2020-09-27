const { app, screen, BrowserWindow } = require('electron')

const createWindow = () => {
  let screenElectron = screen
  let mainScreen = screenElectron.getPrimaryDisplay()
  let allScreens = screenElectron.getAllDisplays()
  let dimensions = mainScreen.size

  let win = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // hot reaload from webpack server
  // win.loadURL('http://localhost:8080/')

  win.loadFile('index.html')

}

app.on('ready', createWindow)