import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                </Routes>
            </BrowserRouter>
            <div className="app-menu navbar-menu">
            
                <div className="navbar-brand-box">
                
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </a>
                
                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="17" />
                        </span>
                    </a>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>

                <div id="scrollbar">
                    <div className="container-fluid">

                        <div id="two-column-menu">
                        </div>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">Menu</span></li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#">
                                    <i className="ri-dashboard-2-line"></i> <span data-key="t-ecommerce">Dashboards</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMultilevel">
                                    <i className="ri-share-line"></i> <span data-key="t-multi-level">Multi Level</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarMultilevel">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sidebarAccount" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2"> Level
                                                1.2
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarAccount">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link" data-key="t-level-2.1"> Level 2.1 </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#sidebarCrm" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2"> Level 2.2
                                                        </a>
                                                        <div className="collapse menu-dropdown" id="sidebarCrm">
                                                            <ul className="nav nav-sm flex-column">
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link" data-key="t-level-3.1"> Level 3.1
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link" data-key="t-level-3.2"> Level 3.2
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="sidebar-background"></div>
            </div>
            <div className="vertical-overlay"></div>
        </>
    );
}

export default Sidebar;