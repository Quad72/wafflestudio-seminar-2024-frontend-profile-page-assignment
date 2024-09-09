import './App.css';

import { useState } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  //const [count, setCount] = useState(0);

  const [fontSize, setFontSize] = useState(2);

  // 버튼 클릭 시 호출되는 함수
  const increaseFontSize = () => {
    setFontSize((prevSize) => parseFloat((prevSize + 0.2).toFixed(1))); // 글자 크기를 0.2em씩 증가
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1
        style={{
          fontSize: `${fontSize}em`,
          transition: 'font-size 0.3s ease',
        }}
      >
        허용재
      </h1>
      <div className="card">
        <button onClick={increaseFontSize}>size is {fontSize}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="centered-list">
        <div className="card">
          <h1>안녕하세요!</h1>
        </div>
        <ul>
          <li>조선해양공학과 20학번</li>
          <li>text2</li>
          <li>text2</li>
        </ul>
      </div>
    </>
  );
}

export default App;
