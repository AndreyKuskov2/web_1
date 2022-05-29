import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [loginText, setLoginText] = useState(0);

  const clickBtn = () => {
    if (loginText === 0) {
      setLoginText(1)
    }
    else {
      setLoginText(0);
    }
  }

  return (
    <div className="App">
      <p>Hello, {props.name}</p>
      <button onClick={clickBtn}>{ loginText === 0 ? "LOG IN" : "LOG OUT" }</button>
      {
        loginText === 0 ? <div>
          <img src="https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg" width={100} height={100} />
          <p>Logged out</p>
        </div> : <div>
          <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" width={100} height={100} />
          <p>Logged in</p>
        </div>
      }
    </div>
  );
}

export default App;
