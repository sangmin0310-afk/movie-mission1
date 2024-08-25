import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter를 추가합니다.
import App from './App.jsx';
import './index.css';

// StrictMode와 BrowserRouter를 사용하여 앱을 렌더링
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <App />
    </Router>
  </StrictMode>,
);