export const IPC_CHANNELS = {
	GET_APP_INFO: 'get-app-info',
	UPDATE_COUNTER: 'update-counter',
	GET_COUNTER: 'get-counter'
} as const;

export interface AppInfo {
	node: string;
	chrome: string;
	electron: string;
	version: string;
	name: string;
}
