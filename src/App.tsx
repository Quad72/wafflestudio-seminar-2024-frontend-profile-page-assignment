import './App.css';

import { useEffect, useState } from 'react';

import arrowmark from './assets/arrow_down.svg';
import gjprofile from './assets/profile.png';
//import viteLogo from '/vite.svg';

//import reactLogo from './assets/react.svg';

function App() {
  //const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [isScrolled, setIsScrolled] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 250) {
      setIsScrolled(true);
      setIsVisible(false);
    } else {
      setIsScrolled(false);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = isScrolled
      ? 'aquamarine'
      : 'aliceblue';
  }, [isScrolled]);

  return (
    <>
      <h1
        style={{
          fontSize: `2em`,
          transition: 'font-size 0.3s ease',
          marginTop: '1em',
          marginBottom: '1em',
        }}
        className="main-h1"
      >
        안녕하세요!
      </h1>
      <div
        className="card"
        style={{ fontSize: '0.8em', opacity: isVisible ? 1 : 0 }}
      >
        <h1 className="text-disapper">허용재 입니다.</h1>
      </div>
      <div className="fixed-arrow">
        <img
          src={arrowmark}
          alt="Fixed Image"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
      </div>
      <div className={`app ${isScrolled ? 'scrolled' : ''}`}>
        <div className="content">
          {isScrolled ? <ScrolledComponent /> : <InitialComponent />}
        </div>
      </div>
    </>
  );
}

const InitialComponent = () => <div className="initial-component"></div>;

const ScrolledComponent = () => {
  const [gap, setgap] = useState(0);
  const [il, setil] = useState('1');
  const [fontSize, setFontSize] = useState(2);

  const seperatingone = () => {
    setil('11');
    setgap((prevgap) => prevgap + 2);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => parseFloat((prevSize + 0.2).toFixed(1))); // 글자 크기를 0.2em씩 증가
  };

  return (
    <div className="scrolled-component">
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
      <ul className="centered-list">
        <li style={{ fontSize: '24px' }}>조선해양공학과 20학번</li>
        <li style={{ fontSize: '24px' }}>MBTI는 ENTP입니다</li>
        <li style={{ fontSize: '24px' }}>취미는 배드민턴 입니다</li>
        <li style={{ fontSize: '24px' }}>말장난 개그를 좋아하는 편입니다</li>
        <li
          className="heading"
          style={{
            fontSize: `24px`,
          }}
        >
          이런거 말이죠
        </li>
        <li style={{ fontSize: '18px' }}>
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
  );
};

export default App;
