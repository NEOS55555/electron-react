const { app, BrowserWindow, Notification, Menu, MenuItem } = require('electron');


const path = require('path');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

function showNotification () {
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  };
  console.log(notification)
  console.log(Notification.isSupported())
  new Notification(notification).show()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,  // 可以在渲染程序中使用node
      // preload:path.resolve(path.join(__dirname, "./osc-preload.js"))
    }
  });
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'production') {
    mainWindow.loadURL('http://localhost:3000/');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  setTimeout(() => {

    showNotification();
  }, 1000)
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
    
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.



/* const menu = new Menu()
menu.append(new MenuItem({
  label: '一个小菜单',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('Electron rocks!') }
  }]
}))

Menu.setApplicationMenu(menu) */


// BrowserWindow.getFocusedWindow（）。webContents.send（'myMessage'，'Hello'）; 

// 在主进程中
const { ipcMain } = require('electron')
ipcMain.on('getList', (event, arg) => {
    //获取数据的代码 
    //实际中可能类似service.getList(arg)
    // console.log(event, arg)

    createWindow()
    event.sender.send('getList-done', 'list data');
})
