import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    // const location = useLocation();
    const { pathname } = location;

    return (
        <main>
            {/* Only show Navbar if not on the /login path */}
            {pathname !== '/Login' && <Navbar />}
            <div>{children}</div>
        </main>
    );
};

export default MainLayout;
