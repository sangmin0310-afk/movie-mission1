import { Route, Routes } from 'react-router-dom'; 
import MovieList from './MovieList'; 
import MovieDetail from './MovieDetail'; 

// 애플리케이션의 라우팅을 관리
const App = () => (
    // Routes 컴포넌트는 라우트 정의를 감싸고 여러 Route 컴포넌트를 자식으로 가짐
    <Routes>
        {/* 기본 경로('/')에 대해 MovieList 컴포넌트를 렌더링함 */}
        <Route path="/" element={<MovieList />} />
        
        {/* '/movie/:id' 경로에 대해 MovieDetail 컴포넌트를 렌더링함 :id는 URL 파라미터로 특정 영화의 ID를 나타냄 */}
        <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
);


export default App;
