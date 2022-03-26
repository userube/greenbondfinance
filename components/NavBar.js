import React from 'react'
import Image from 'next/image'
import navBarStyles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light p-3" style={{ boxSshadow: '1px 1px 3px -3px #000' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src="/logo-horizontal.png" alt="GreenBond Financial Company" layout="fixed" width={200} height={40}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '3%' }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${navBarStyles.navActiveLinkGreenBond}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${navBarStyles.navLinkGreenBond}`} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${navBarStyles.navLinkGreenBond}`} href="#">Loans</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${navBarStyles.navLinkGreenBond}`} href="#">Invest</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${navBarStyles.navLinkGreenBond}`} href="#">Help</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a className={`btn btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`}>Sign In</a>
                    </form>
                    <form className="d-flex" style={{ marginLeft: '10px' }}>
                        <a className={`btn btn-lg btn-success shadow ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBond}`}>Get On Board</a>
                    </form>
                </div>
            </div>
        </nav>  
    )
}

export default NavBar