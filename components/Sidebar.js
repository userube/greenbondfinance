import Link from "next/link"
import Image from 'next/image';
import { BsFillGridFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillReplyAllFill } from "react-icons/bs";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import sidebarStyles from '../styles/Sidebar.module.css';

const Sidebar = () => {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ position: 'fixed', height: '-webkit-fill-available', zIndex: '9999'  }}>
                
                {/* <div classjName="position-sticky pt-3"> */}
                    <Link href="/" className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none text-center ${sidebarStyles.sidebarLogo}`}>
                        <a href="#" style={{ color: '#a2c546' }}>
                            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                            
                            <Image src="/android-chrome-192x192.png" alt="GreenBond Financial Company" layout="fixed" width={40} height={40}/>
                            <h3 className="" style={{ marginLeft: '50px', marginTop: '-43px'}}>
                                GreenBond
                            </h3>
                        </a>
                    </Link>
                    <hr style={{ backgroundColor: 'rgb(162, 197, 70)' }}/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} ${sidebarStyles.sideBarActive}`} aria-current="page" href="#">
                                    <BsFillGridFill className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <BsBarChartFill className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Investments</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <BsFillPiggyBankFill className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>My Loans</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <FaMoneyBillWave className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Payments</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <FaSyncAlt className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Repayments</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom}`} aria-current="page" href="#">
                                    <FaWpforms className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Apply for Loan</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom}`} aria-current="page" href="#">
                                    <BsCreditCardFill className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Banks & Cards</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom}`} aria-current="page" href="#">
                                    <BsFillReplyAllFill className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Transfers</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <FaRegFilePdf className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Documents</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <a className={`nav-link ${sidebarStyles.navLinkCustom} `} aria-current="page" href="#">
                                    <FaQuestionCircle className={`${sidebarStyles.sideBarIcon}`}/>
                                    <span className={`${sidebarStyles.verticalAlignTxtMiddle}`}>Help</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <hr style={{ backgroundColor: 'rgb(162, 197, 70)' }}/>
                    <div className="dropdown">
                        <Link  href="#">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" > */}
                                <Image src="/pf.jpg" alt="User" layout="fixed" width={32} height={32} className={`${sidebarStyles.customPf}`} style={{borderRadius: '50px', marginRight: '10px'}}/>
                                <strong style={{ paddingLeft: '8px'}}>Samuel Kwarus</strong>
                            </a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <Link  href="#"><li><a className="dropdown-item" href="#">Settings</a></li></Link>
                            <Link  href="#"><li><a className="dropdown-item" href="#">Profile</a></li></Link>
                            <Link  href="#"><li><hr className="dropdown-divider"/></li></Link>
                            <Link  href="#"><li><a className="dropdown-item text-danger" href="#">Sign out</a></li></Link>
                        </ul>
                    </div>
                {/* </div> */}
            </nav>
        </>
    )
}

export default Sidebar