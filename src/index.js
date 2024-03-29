import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_Bd.otf';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_Bk.otf';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_Blk.otf';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_Lt.otf';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_Md.otf';
import './fonts/AirbnbCerealApp/AirbnbCereal_W_XBd.otf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
