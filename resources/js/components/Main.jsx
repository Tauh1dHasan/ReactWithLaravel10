import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './app/Header';
import Sidebar from './app/Sidebar';
// import Dashboard from './pages/Dashboard';
import Footer from './app/Footer';

function Main() {
    return (

        <>
            <Header />
            <Sidebar />
            {/* <Dashboard /> */}
            <Footer />
        </>

    );
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render( < Main /> );