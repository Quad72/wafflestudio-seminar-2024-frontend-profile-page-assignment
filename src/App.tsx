import './App.css';

import { useState } from 'react';

import gjprofile from './assets/profile.png';
//import viteLogo from '/vite.svg';

//import reactLogo from './assets/react.svg';

function App() {
  //const [count, setCount] = useState(0);

  const [fontSize, setFontSize] = useState(2);
  const [gap, setgap] = useState(0);
  const [il, setil] = useState('1');

  // 버튼 클릭 시 호출되는 함수
  const increaseFontSize = () => {
    setFontSize((prevSize) => parseFloat((prevSize + 0.2).toFixed(1))); // 글자 크기를 0.2em씩 증가
  };
  //일 벌리기 함수
  const seperatingone = () => {
    setil('11');
    setgap((prevgap) => prevgap + 2);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: '12px' }} className="centered-h1">
          클릭하여 깃허브로 이동 -&gt;
        </h1>
        <div>
          <a
            href="https://github.com/Quad72"
            target="_blank"
            rel="noreferrer"
            className="centered-content"
          >
            <img src={gjprofile} className="profile" alt="profile_fig" />
          </a>
        </div>
        <h1 style={{ fontSize: '12px' }} className="centered-h1">
          &lt;-클릭하여 깃허브로 이동
        </h1>
      </div>
      <h1
        style={{
          fontSize: `2em`,
          transition: 'font-size 0.3s ease',
          marginTop: '1em',
          marginBottom: '1em',
        }}
      >
        허용재
      </h1>
      <div className="centered-div">
        <div className="card" style={{ fontSize: '0.8em' }}>
          <h1>안녕하세요!</h1>
        </div>
        <ul className="centered-list">
          <li style={{ fontSize: '16px' }}>조선해양공학과 20학번</li>
          <li style={{ fontSize: '16px' }}>MBTI는 ENTP입니다</li>
          <li style={{ fontSize: '16px' }}>말장난 개그를 좋아하는 편입니다</li>
          <li>
            <p
              className="heading"
              style={{
                fontSize: `16px`,
              }}
            >
              이런거 말이죠
            </p>
          </li>
          <li>
            <button onClick={increaseFontSize}>일 키우기</button>
            <button onClick={seperatingone}>일 벌리기</button>
            <p
              className="heading"
              style={{
                fontSize: `${fontSize}em`,
                transition: 'font-size 0.3s ease',
                letterSpacing: `${gap}px`,
              }}
            >
              {il}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
