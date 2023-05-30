import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footers from '../Pages/Share/Footers/Footers';


const Main = () => {
    const location = useLocation()
// console.log(location);
const isLogin = location.pathname.includes('login') ||
location.pathname.includes('register')
    return (
        <div>
           {isLogin || <Header></Header>}
            <Outlet></Outlet>
             {isLogin || <Footers></Footers>}
        </div>
    );
};

export default Main;