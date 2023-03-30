import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>
);

