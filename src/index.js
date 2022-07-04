import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/UserContext';
import DataProvider from './redux/store'
ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
    </React.StrictMode>
  </UserProvider>,
  document.getElementById('root')
);

