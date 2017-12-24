import * as path from "path";
import { app, BrowserWindow } from "electron";

const isDev = process.env.NODE_ENV !== "production";
const devUrl = `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`;
const prodUrl = `file://${path.join(__static, "index.html")}`;

let mainWindow: BrowserWindow | undefined;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(isDev ? devUrl : prodUrl);

    mainWindow.on("closed", function () {
        mainWindow = undefined;
    });
};

app.on("ready", createWindow);