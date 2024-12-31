import {app, ipcMain, IpcMainInvokeEvent} from "electron";
import {AppInfo, IPC_CHANNELS} from "../shared/ipc";


let counter = 0;

export function setupIpcHandlers() {
	// 앱 정보 가져오기
	ipcMain.handle(IPC_CHANNELS.GET_APP_INFO, getAppInfo);

	// 카운터 업데이트
	ipcMain.handle(IPC_CHANNELS.UPDATE_COUNTER, updateCounter);

	// 카운터 가져오기
	ipcMain.handle(IPC_CHANNELS.GET_COUNTER, getCounter);
}

export function cleanupIpcHandlers() {
	ipcMain.removeAllListeners(IPC_CHANNELS.GET_APP_INFO);
	ipcMain.removeAllListeners(IPC_CHANNELS.UPDATE_COUNTER);
	ipcMain.removeAllListeners(IPC_CHANNELS.GET_COUNTER);
}

function getAppInfo(): AppInfo {
	console.log("getAppInfo called");
	return {
		node: process.versions.node,
		chrome: process.versions.chrome,
		electron: process.versions.electron,
		version: app.getVersion(),
		name: app.getName()
	};
}

function updateCounter(_event: IpcMainInvokeEvent, value: number): number {
	counter = value;
	return counter;
}

function getCounter(): number {
	return counter;
}
