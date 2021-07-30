import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// App의 상위 컴포넌트 소환하여 App 감싸기
import {Provider} from 'react-redux';
//여기서 한번만 store 적용 해주면됨
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* react-redux 적용*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
