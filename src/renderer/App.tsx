import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [appInfo, setAppInfo] = useState<{
    node: string;
    chrome: string;
    electron: string;
    version: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    // 안전한 electronAPI 접근
    if (window.electronAPI) {
      // 앱 시작 시 앱 정보 가져오기
      window.electronAPI.getAppInfo().then(setAppInfo);

      // 초기 카운터 값 가져오기
      window.electronAPI.getCounter().then(setCount);
    } else {
      console.log("없음");
    }
  }, []);

  const handleCounterUpdate = async () => {
    if (window.electronAPI) {
      const newCount = count + 1;
      const updatedCount = await window.electronAPI.updateCounter(newCount);
      setCount(updatedCount);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Electron</h1>

      {appInfo && (
        <div>
          <h2>App Information</h2>
          <p>Name: {appInfo.name}</p>
          <p>Version: {appInfo.version}</p>
          <p>Node: {appInfo.node}</p>
          <p>Electron: {appInfo.electron}</p>
          <p>Chrome: {appInfo.chrome}</p>
        </div>
      )}

      <div className="card">
        <button onClick={handleCounterUpdate}>
          count is {count}
        </button>
        <p>
          Edit <code>src/renderer/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
