import React from 'react';

function Header() {
    return (
        <>
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box horizontal-logo">
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
                            </div>

                            <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                                id="topnav-hamburger-icon">
                                <span className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>

                        <div className="d-flex align-items-center">

                            <div className="dropdown topbar-head-dropdown ms-1 header-item">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-category-alt fs-22'></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="btn btn-sm btn-soft-info"> View All Apps
                                                    <i className="ri-arrow-right-s-line align-middle"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/github.png" alt="Github" />
                                                    <span>GitHub</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                    <span>Bitbucket</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                    <span>Dribbble</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                    <span>Dropbox</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                    <span>Mail Chimp</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src="assets/images/brands/slack.png" alt="slack" />
                                                    <span>Slack</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ms-1 header-item d-none d-sm-flex">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                    data-toggle="fullscreen">
                                    <i className='bx bx-fullscreen fs-22'></i>
                                </button>
                            </div>

                            <div className="ms-1 header-item d-none d-sm-flex">
                                <button type="button"
                                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                                    <i className='bx bx-moon fs-22'></i>
                                </button>
                            </div>

                            <div className="dropdown topbar-head-dropdown ms-1 header-item">

                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                    id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className='bx bx-bell fs-22'></i>
                                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3</span>
                                    <span className="visually-hidden">unread messages</span>
                                </button>

                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">

                                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                                        <div className="p-3">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                                </div>
                                                <div className="col-auto dropdown-tabs">
                                                    <span className="badge badge-soft-light fs-13"> 3 New</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-2 pt-2">
                                            <ul className="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true"
                                                id="notificationItemsTab" role="tablist">
                                                <li className="nav-item waves-effect waves-light">
                                                    <a className="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">
                                                        All (3)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="tab-content" id="notificationItemsTabContent">
                                        
                                        <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                                            <div data-simplebar style={{maxHeight: "300px"}} className="pe-2">

                                                <div className="text-reset notification-item d-block dropdown-item position-relative"  style={{backgroundColor:"antiquewhite"}}>
                                                    <div className="d-flex">
                                                        <div className="avatar-xs me-3">
                                                            <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                                                <i className="bx bx-badge-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                                                    Optimization <span className="text-secondary">reward</span> is
                                                                    ready!
                                                                </h6>
                                                            </a>
                                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                                <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-3 text-center">
                                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">View All Notifications 
                                                        <i className="ri-arrow-right-line align-middle"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="dropdown ms-sm-3 header-item topbar-user">
                                <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span className="d-flex align-items-center">
                                        <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                        <span className="text-start ms-xl-2">
                                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                        </span>
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    
                                    <h6 className="dropdown-header">Welcome Anna!</h6>

                                    <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> 
                                        <span className="align-middle">Profile</span>
                                    </a>
                                    
                                    <a className="dropdown-item" href="#">
                                        <span className="badge bg-soft-success text-success mt-1 float-end">New</span>
                                        <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> 
                                        <span className="align-middle">Settings</span>
                                    </a>
                                    
                                    <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> 
                                        <span className="align-middle" data-key="t-logout">Logout</span>
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;