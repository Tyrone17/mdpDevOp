import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Viewer from './Viewer'
// import { WebView} from 'react-native-webview';
// import reportWebVitals from './reportWebVitals';
import Content from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Content /> */}
  </React.StrictMode>
);

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    {/* <App /> */}
    <Content />
  </React.StrictMode>
);

const subroot = ReactDOM.createRoot(document.getElementById('subroot'));
subroot.render(
  <React.StrictMode>
    <h2 className='Render'>Rendering area</h2>
    {/* <br></br> */}
    <Viewer />
    {/* {reactElement} */}
    <footer>coded by techserv-bit copyright 2023</footer>
  </React.StrictMode>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

