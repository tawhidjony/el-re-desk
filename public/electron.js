const { app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

Menu.setApplicationMenu(false)
const createWindow = () => {
  const win = new BrowserWindow({
    width: 575,
    height: 767,
    minWidth:575,
    minHeight:767,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
