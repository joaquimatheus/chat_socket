import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Chat from './pages/Chat';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Chat />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
