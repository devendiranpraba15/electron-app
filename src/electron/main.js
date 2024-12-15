import { app, BrowserWindow } from "electron";
import nodepath from 'path';

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadFile(nodepath.join(app.getAppPath(), 'react-dist/index.html'));
});
