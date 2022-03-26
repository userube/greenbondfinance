import React from 'react'
import Image from 'next/image'
import bannerAreaStyles from '../styles/BannerArea.module.css';
import navBarStyles from '../styles/NavBar.module.css';
import mainContentStyles from '../styles/MainContentStyles.module.css';
import sidebarStyles from '../styles/Sidebar.module.css';
import { BsArrowRight } from "react-icons/bs";

const MainContent = () => {
    return (
        <div>
            <section className={`${mainContentStyles.sect}`}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6'>
                            <div className="container">
                                <div className="text-center">
                                    <Image src="/phfl.png" layout="fixed" width={320} height={650}  />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="container">

                                <h1 className={`${bannerAreaStyles.greenBondMainHeading}`} style={{ marginTop: '5rem' }}>
                                    Investments with  <br/>
                                    great returns
                                </h1>

                                <br/>

                                <p className={`mt-4 ${mainContentStyles.greenBondTxt}`}>
                                    Fund your ₦ & $ balance instantly and invest securely and confidently on the go.
                                    You can also diversify your holdings 
                                    by buying into a bundle of stocks (called an ETF).
                                </p>

                                <a className={`mt-4 btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                    <BsArrowRight className={`${bannerAreaStyles.Icon}`}/>
                                    <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                        Learn More
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${mainContentStyles.sect}`} style={{ background: '#769f0a0f' }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-7'>
                            <div className="container">
                                <div style={{ marginLeft: '20%' }}>

                                    <h1 className={`${bannerAreaStyles.greenBondMainHeading}`} style={{ marginTop: '5rem' }}>
                                        Convenient Salary & <br/> 
                                        Personal  Loans
                                    </h1>

                                    <br/>

                                    <p className={`mt-4 ${mainContentStyles.greenBondTxt}`}>
                                        Apply 24/7 and receive credits in your account instantly without no collateral or guarantor
                                    </p>

                                    <a className={`mt-4 btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                        <BsArrowRight className={`${bannerAreaStyles.Icon}`}/>
                                        <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                            Learn More
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="container">
                                <div className="text-center">
                                    <Image src="/phfl.png" layout="fixed" width={320} height={650}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${mainContentStyles.sect}`}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-5'>
                            <div className="container">
                                <div className="text-center">
                                    <Image src="/phfl.png" layout="fixed" width={320} height={650}  />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className="container">

                                <h1 className={`${bannerAreaStyles.greenBondMainHeading}`} style={{ marginTop: '5rem' }}>
                                    Seamless Transfer & <br/>
                                    Bill Payments
                                </h1>

                                <br/>

                                <p className={`mt-4 ${mainContentStyles.greenBondTxt}`}>
                                    You can send money to anyone, pay all your bills, and 
                                    recharge airtime, with just a few taps on your smartphone 
                                </p>

                                <a className={`mt-4 btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                    <BsArrowRight className={`${bannerAreaStyles.Icon}`}/>
                                    <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                        Learn More
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${mainContentStyles.sect}`} style={{ background: '#faebd770' }}>
                <div className='container'>
                    <div className="row justify-content-center ">
                        <div className='col-md-9'>
                            <div className="container">
                                <div>
                                    <h1 className={`text-center ${bannerAreaStyles.greenBondMainHeading}`} style={{ marginTop: '2rem' }}>
                                        Get the app now 
                                    </h1>

                                    <p className={`text-center mt-4 ${mainContentStyles.greenBondTxt}`} style={{ maxWidth: '100%' }}>
                                        Download the GreenBond app for Investments, Loans, Savings & Fixed Deposits 
                                    </p>

                                    <div className="text-center mt-4">
                                        <a className={`btn btn-lg btn-success shadow ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBond}`}>Get On Board</a>
                                    </div>

                                    <div className="text-center mt-4">
                                        <a className={`btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`}>
                                            <Image src="/apple-logo.png" layout="fixed" width={20} height={20} class="mr-3"/>
                                            <span  style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>Get on iPhone</span>
                                        </a>
                                        <a className={`btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                            <Image src="/google-play.png" layout="fixed" width={20} height={20}/>
                                            <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                                Get On Android
                                            </span>
                                        </a>
                                        <a className={`btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                            <Image src="/browser.png" layout="fixed" width={20} height={20}/>
                                            <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                                Use On Browser
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${mainContentStyles.sect}`} style={{ marginTop: '0' }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-5'>
                            <div className="container">
                                <div>
                                    <h1 className={`${bannerAreaStyles.greenBondMainHeading}`}>
                                        Customer Reviews
                                    </h1>

                                    <p className={` mt-4 ${mainContentStyles.greenBondTxt}`} style={{ maxWidth: '100%' }}>
                                        Since launching in 2022, over 1,000,000+ people have used 
                                        GreenBond to invest their money better, and get instant loans. 
                                    </p>

                                    <div className="mt-4">
                                        <a className={`btn btn-lg btn-success shadow ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBond}`}>Get On Board</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <div className="card widget-flat shadow" style={{ background: '#769f0a0a' }}>
                                            <div className="card-body p-0">
                                                <div className="p-3 pb-0">
                                                    <div>
                                                        <div>
                                                            <Image src="/pf.jpg" alt="User" layout="fixed" width={32} height={32} className={`${sidebarStyles.customPf}`} />
                                                            <span className='h6' style={{ paddingLeft: '10px', verticalAlign: 'super' }}>Samuel Kwarus</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <p className="text-muted font-weight-normal mt-2" style={{ fontSize:'small' }}>
                                                        best loan service app, fast and easy to use, the interest rates are one of the best and they’re
                                                        very empathetic with repayment delays and I can’t overemphasize this. Well done guy
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card widget-flat shadow" style={{ background: '#769f0a0a' }}>
                                            <div className="card-body p-0">
                                                <div className="p-3 pb-0">
                                                    <div>
                                                        <div>
                                                            <Image src="/cole.jpg" alt="User" layout="fixed" width={32} height={32} className={`${sidebarStyles.customPf}`} />
                                                            <span className='h6' style={{ paddingLeft: '10px', verticalAlign: 'super' }}>Cole Williams</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <p className="text-muted font-weight-normal mt-2" style={{ fontSize:'small' }}>
                                                        best loan service app, fast and easy to use, the interest rates are one of the best and they’re
                                                        very empathetic with repayment delays and I can’t overemphasize this. Well done guy
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContent