import React from 'react';
import SideBar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="flex-1 bg-slate-800 p-5">
                <SideBar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
