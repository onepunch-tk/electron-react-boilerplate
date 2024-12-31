import {AppInfo} from "./ipc.ts";

declare global {
	interface Window {
		electronAPI?: {
			getAppInfo: () => Promise<AppInfo>;
			updateCounter: (value: number) => Promise<number>;
			getCounter: () => Promise<number>;
		};
	}
}

export {};
