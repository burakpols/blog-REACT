import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from "./Redux/Reducer/ConfigureStore"
import "./Firebase/FirebaseConfig";
const store= configureStore();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><Provider store={store}><App /></Provider> </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
