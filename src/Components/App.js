import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from './MainScreen';
import Header from './Header';
export default function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainScreen />} />
        </Routes>
        </BrowserRouter>
    );
}