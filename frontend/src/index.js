import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import background from "./images/pink.jpg";
// import thunk from 'redux-thunk';
// import banksReducer from './reducers/banksReducer.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* style={{ backgroundImage: `url(${background}` }} */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
