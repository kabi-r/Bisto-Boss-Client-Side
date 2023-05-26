import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footers from '../Pages/Share/Footers/Footers';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;