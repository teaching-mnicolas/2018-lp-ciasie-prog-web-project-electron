const { app, BrowserWindow } = require('electron')
var path = require('path')
const ipc = require('electron').ipcMain;

// Gardez une reference globale de l'objet window, si vous ne le faites pas, la fenetre sera
// fermee automatiquement quand l'objet JavaScript sera garbage collected.
let win;
let calendarWindow = null;

function createWindow() {
    // Créer le browser window.
    win = new BrowserWindow({
        show: false,
        center: true,
        width: 350,
        height: 250,
        icon: path.join(__dirname, 'alarm.png'),
        resizable: false,
        backgroundColor: '#1E1E6D'
    })

    // et charge le index.html de l'application.
    win.loadFile('clock.html')
    win.once('ready-to-show', () => {
        win.show();
    })
    // Ouvre les DevTools.
    //   win.webContents.openDevTools()

    // Émit lorsque la fenêtre est fermée.
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)

// Quitte l'application quand toutes les fenêtres sont fermées.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})

ipc.on('calendar_click', () => {
    if (calendarWindow === null) {
        createCalendarWindow();
    }
});

function createCalendarWindow() {
    calendarWindow = new BrowserWindow({
        parent: win,
        show: false,
        center: true,
        icon: path.join(__dirname, 'alarm.png'),
        resizable:false,
        backgroundColor: '#1E1E6D'
    })
    // calendarWindow.loadURL('https://www.google.com/');
    calendarWindow.loadFile('calendar.html');
    calendarWindow.once('ready-to-show', () => {
        calendarWindow.show();
    })
    calendarWindow.on('closed', () => {
        calendarWindow = null;
    })
}


