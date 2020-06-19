// Entry point of Electron app
'use strict'

// Electronのモジュール
const electron = require('electron')

// アプリケーションをコントロールするモジュール
const app = electron.app

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow

const mainURL = `file://${__dirname}/public/index.html`

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Electronの初期化完了後に実行
app.on('ready', () => {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 960
//    icon: path.join(__dirname, '/public/favicon.ico')
  })
  mainWindow.loadURL(mainURL)

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
