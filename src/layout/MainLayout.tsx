import React from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { pathname } = location;

    return (
        <main>
            {/* Only show Navbar if not on the /login path */}
            {pathname.toLowerCase() !== '/login' && <Navbar />}
            <div>{children}</div>
        </main>
    );
};

export default MainLayout;
