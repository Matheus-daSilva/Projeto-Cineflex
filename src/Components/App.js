import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

export default function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/sessoes/:idFilme" element={<SecondScreen />} />
            <Route path="/assentos/:idSessao" element={<ThirdScreen />} />
        </Routes>
        </BrowserRouter>
    );
}