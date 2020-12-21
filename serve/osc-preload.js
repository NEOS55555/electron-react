const path = require("path")
const fs = require("fs")

window.readFile = url => fs.readFileSync(url).toString()

console.log('wo jin lai le')


// 在渲染进程中
const { ipcRenderer } = require('electron')

ipcRenderer.on('getList-done', (event, arg) => {
    console.log(arg); // 输出 'list data'
})
window.abc = 1;
console.log(window)
window.onload = function () {
	/*document.querySelector('#click').onclick = () => {
		ipcRenderer.send('getList', 'list args')
		console.log(readFile)
	}*/

}



//组件销毁后移除这个监听
// ipcRenderer.removeAllListeners('getList-done')
//或者ipcRenderer.removeListener移除指定的监听
