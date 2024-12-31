import {app, BrowserWindow} from "electron";
import {join} from "path";
import {setupIpcHandlers} from "./ipcHandler.ts";
import * as path from "node:path";
import * as fs from "node:fs";


const isDev = process.env.NODE_ENV === 'development';

console.log("Absolute preload path:", path.resolve(__dirname, 'preload.js'));
console.log("Preload file exists:", fs.existsSync(path.resolve(__dirname, 'preload.js')));

function createWindow() {
	// CSP 설정
	// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	// 	callback({
	// 		responseHeaders: {
	// 			...details.responseHeaders,
	// 			'Content-Security-Policy': [
	// 				isDev
	// 					// 개발 환경 CSP
	// 					? [
	// 						`default-src 'self';`,
	// 						`script-src 'self' 'unsafe-inline' 'unsafe-eval';`, // Vite와 React Refresh를 위해 필요
	// 						`style-src 'self' 'unsafe-inline';`,
	// 						`img-src 'self' data: https:;`,
	// 						`font-src 'self';`,
	// 						`connect-src 'self' ws://localhost:5173;` // Vite HMR
	// 					].join(' ')
	// 					// 프로덕션 환경 CSP
	// 					: [
	// 						`default-src 'self';`,
	// 						`script-src 'self';`,
	// 						`style-src 'self' 'unsafe-inline';`,
	// 						`img-src 'self' data: https:;`,
	// 						`font-src 'self';`,
	// 						`connect-src 'self';`
	// 					].join(' ')
	// 			]
	// 		}
	// 	});
	// });
	const preloadPath = join(__dirname, 'preload.js');

	console.log("Preload absolute path:", preloadPath);
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: preloadPath,
			//보안 설정
			nodeIntegration: false, // Node.js API 직접 접근 차단
			contextIsolation: true, // 컨텍스트 격리 활성화
			webSecurity: true, // 웹 보안 설정 활성화
			allowRunningInsecureContent:false, // 안전하지 않은 콘텐츠 실행 차단
			// 추가 보안 설정
			safeDialogs: true,            // 대화상자 남용 방지
			spellcheck: false             // 불필요한 기능 비활성화
		},
	});

	setupIpcHandlers();

	mainWindow.loadURL(
		isDev
			? 'http://localhost:5173'
			: `file://${join(__dirname, '../renderer/index.html')}`
	);

	if (isDev) {
		mainWindow.webContents.openDevTools();
	}
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
