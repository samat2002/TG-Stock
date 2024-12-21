import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home/index';
import LogIn from './page/Login/index';
import Employee from './page/Employee';

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </Router>
    );
}

export default AppRoute;
