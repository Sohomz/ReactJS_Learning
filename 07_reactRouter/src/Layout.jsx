import React from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            {/* outlet is children you mentioned in path -> children (children is keyword) */}
            <Footer/>
        </>
    )
}

export default Layout;