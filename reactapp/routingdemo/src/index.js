import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div style={{width:1000, marginLeft:100, marginTop:100}} className="App">
   <App />
   </div>
   </BrowserRouter>
    );

