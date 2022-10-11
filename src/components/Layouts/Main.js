import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Navbar/Navbar';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <div><h1 className='m-4'>Welcome to Quiz Central!!!</h1></div>
            <Outlet></Outlet>
        </div >
    );
};

export default Main;