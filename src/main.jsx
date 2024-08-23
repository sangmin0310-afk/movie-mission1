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





























{/*
Imports

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

StrictMode: React의 StrictMode 컴포넌트는 애플리케이션의 
잠재적인 문제를 감지하고 경고합니다. 
개발 모드에서만 활성화되며, 
렌더링 및 라이프사이클 메서드의 검사를 강화합니다.
createRoot: React 18에서 새로 추가된 API로, 
React 애플리케이션을 DOM에 렌더링할 때 사용됩니다. 
react-dom/client에서 가져옵니다.
BrowserRouter (Router): React Router의 주요 라우터 컴포넌트로,
HTML5의 history API를 사용하여 클라이언트 측 라우팅을 
처리합니다. 애플리케이션 내의 모든 라우트를 관리하고 
URL에 따라 컴포넌트를 렌더링합니다.
App: 애플리케이션의 최상위 컴포넌트로, 
앱의 모든 하위 컴포넌트와 라우팅을 정의합니다.
index.css: 전역 CSS 스타일을 정의하는 파일입니다. 
애플리케이션의 전체 스타일을 설정합니다.

2. Rendering the App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

createRoot(document.getElementById('root')): createRoot 
메서드를 사용하여 HTML 문서에서 지정된 DOM 노드(root)에 
React 애플리케이션을 렌더링합니다. 
getElementById('root')는 index.html 파일의 <div id="root"></div> 요소를 참조합니다.
render(...): createRoot 메서드가 반환하는 root 객체에서 
render 메서드를 호출하여 React 애플리케이션을 DOM에 
렌더링합니다.

3. Components Used
<StrictMode>: React의 개발 모드에서 애플리케이션을 감싸고, 
잠재적인 문제를 발견하는 데 도움을 줍니다. 
예를 들어, 비동기적으로 실행되는 함수의 문제나, 더 이상 사용되지 않는 API의 사용 등을 감지합니다.
<Router> (BrowserRouter): 애플리케이션의 라우팅을 
처리합니다. URL 경로에 따라 적절한 컴포넌트를 렌더링하도록 
도와줍니다. Router는 애플리케이션의 최상위 컴포넌트로 설정하여 
하위 라우트들이 이 컴포넌트의 컨텍스트를 사용할 수 있도록 합니다.
<App />: 애플리케이션의 주요 컴포넌트로, 모든 하위 컴포넌트와 
라우트를 포함합니다. 이 컴포넌트 내에서 정의된 라우트에 따라 
Router가 경로를 처리하고 적절한 화면을 표시합니다.
  
*/}