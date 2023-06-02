const devLoadWinURL = 'http://localhost:5173/';
const createLoadWindows = (BrowserWindow) => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadURL(`${devLoadWinURL}`).then();
}

module.exports = {
    createLoadWindows
}
