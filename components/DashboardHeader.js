import Link from "next/link"
import Image from 'next/image';
import { FaSignOutAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import dashboardHeaderStyles from '../styles/DashboardHeader.module.css';

const DashboardHeader = ({pageTitle}) => {
    return (

        <nav className={`navbar navbar-expand-sm navbar-light bg-light ${dashboardHeaderStyles.customHeader}`}>
            <div className="container">
                <span className="navbar-brand col-md-3 col-lg-2" href="#" style={{ color: '#769f0a', fontWeight: '600'}}>{ pageTitle }</span>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    
                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#">
                                <FaEnvelope style={{ marginTop: '13px', fontSize: '23px' }}/>
                                <sup className="badge bg-danger rounded-circle" style={{ fontSize: '10px', top: '-8px', left:'-10px' }}>2</sup> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">
                                <FaBell style={{ marginTop: '13px', fontSize: '23px', color: '#769f0a' }}/>
                                <sup className="badge bg-danger rounded-circle" style={{ fontSize: '10px', top: '-7px', left:'-10px' }}>2</sup> 
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <div style={{ fontSize: '11px'}}>10:02:15 AM</div>
                                <div style={{ fontSize: '11px'}}>March 09, 2022</div>
                            </a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a href="#" className={`nav-link dropdown-toggle ${dashboardHeaderStyles.customDropdownToggle}`} data-bs-toggle="dropdown">
                                <Image src="/pf.jpg" alt="User" layout="fixed" width={30} height={30} 
                                    className={`${dashboardHeaderStyles.customPf}`} style={{borderRadius: '50px', marginLeft:'0px', marginRight: '5px'}}/>
                                {/* <span style={{ verticalAlign: 'super', paddingLeft: '10px'}}>Samuel Erube</span> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item text-success text-bold">Samuel Kwarus</a>
                                <a href="#" className="dropdown-item">skwarus@yahoo.com</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item text-danger">Sign Out</a>
                            </div>
                        </li>


                        {/* <li className="">
                            <a className="nav-link nav-user" href="#" role="button"
                                >

                                <h6 style={{ marginTop: '16px'}} className="text-right"></h6>
                                <h5 style={{ fontWeight: '600',  color:'wheat' }}>
                                    <i className="fa fa-envelope" style={{ fontSize: '20px', paddingTop: '5px' }}></i>
                                    <sup className="badge badge-danger" style={{ top: '-15px', left:'-10px' }}>2</sup> 
                                </h5>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link nav-user" href="#" role="button">

                                <h6 style={{ marginTop: '16px'}} className="text-right"></h6>
                                <h5 style={{ fontWeight: '600', color:'white' }}>
                                    <i className="fa fa-bell" style={{ fontSize: '20px', paddingTop: '5px'}}></i>
                                    <sup className="badge badge-danger" style={{ top: '-15px', left: '-10px' }}>2</sup> 
                                </h5>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link nav-user" href="#" role="button"
                                style={{ borderLeft: '1px solid green', borderRight: '1px solid green'}}>

                                <h6 style={{ marginTop: '16px'}} className="ctime text-right">
                                    10:02:15 AM</h6>
                                <h6 style={ {marginTop: '-8px' }}>
                                    March 09, 2022</h6>
                            </a>
                        </li>
                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" href="#"
                                role="button" aria-haspopup="false" aria-expanded="false">
                                <h6 className="ml-1 pro-user-name text-right" style={{marginTop: '16px'}}>
                                    Samuel Erube <i className="mdi mdi-chevron-down"></i></h6>
                                <h6 className="ml-1 pro-user-name text-right" style={{marginTop: '-8px' }}>
                                    skwarus@yahoo.com </h6>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="fi-head"></i> <span>My Account</span>
                                </a>

                                <a href="https://assetmgr.bookersklub.com/assetmgr/home/logout" className="dropdown-item notify-item">
                                    <i className="fi-power"></i> <span>Logout</span>
                                </a>

                            </div>
                        </li> */}

                    </ul>
                </div>
            </div>
        </nav>

        // <header className={`navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow ${dashboardHeaderStyles.customHeader}`}>
        //     <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" style={{ color: '#769f0a', fontWeight: '600'}}>{ pageTitle }</span>
        //     <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="navbar-nav">
        //         <div className="nav-item text-nowrap">
        //             <Link href="#">
        //                 <a className="nav-link px-3 text-danger" href="#">
        //                     <FaSignOutAlt/>
        //                     Sign Out
        //                 </a>
        //             </Link>
        //         </div>
        //         <div className="nav-item">
        //             <Link  href="#">
        //                 <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        //                     {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" > */}
        //                     <Image src="/pf.jpg" alt="User" layout="fixed" width={32} height={32} className={`${dashboardHeaderStyles.customPf}`} style={{borderRadius: '50px', marginRight: '10px'}}/>
        //                     <strong style={{ paddingLeft: '8px'}}>Samuel Kwarus</strong>
        //                 </a>
        //             </Link>
        //             <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        //                 <Link  href="#"><li><a className="dropdown-item" href="#">Settings</a></li></Link>
        //                 <Link  href="#"><li><a className="dropdown-item" href="#">Profile</a></li></Link>
        //                 <Link  href="#"><li><hr className="dropdown-divider"/></li></Link>
        //                 <Link  href="#"><li><a className="dropdown-item" href="#">Sign out</a></li></Link>
        //             </ul>
        //         </div>
        //     </div>
        // </header>
    )
}

export default DashboardHeader