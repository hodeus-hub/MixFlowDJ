import { app, BrowserWindow } from "electron";

let win: BrowserWindow | null = null;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL("http://localhost:5173");
});
