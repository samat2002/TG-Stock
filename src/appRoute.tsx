import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import LogIn from './page/LogIn';

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/login" element={<LogIn />} />
            </Routes>
        </Router>
    );
}

export default AppRoute;
