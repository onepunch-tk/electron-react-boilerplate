import {contextBridge, ipcRenderer} from "electron";


const IPC_CHANNELS = {
	GET_APP_INFO: 'get-app-info',
	UPDATE_COUNTER: 'update-counter',
	GET_COUNTER: 'get-counter'
} as const;

contextBridge.exposeInMainWorld('electronAPI', {
	getAppInfo: () => {
		console.log('getAppInfo called');
		return ipcRenderer.invoke(IPC_CHANNELS.GET_APP_INFO);
	},
	updateCounter: (value: number) => {
		console.log('updateCounter called');
		return ipcRenderer.invoke(IPC_CHANNELS.UPDATE_COUNTER, value);
	},
	getCounter: () => {
		console.log('getCounter called');
		return ipcRenderer.invoke(IPC_CHANNELS.GET_COUNTER);
	}
});
