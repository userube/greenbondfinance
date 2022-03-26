import React from 'react'
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer py-5" style={{ background: '#769f0a12'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <Image src="/logo-horizontal.png" alt="GreenBond Financial Company" layout="fixed" width={200} height={40} alt="logo"/>
                            </div>
                            <div>

                                <ul className={`list-unstyled footer-ul mt-3 ${footerStyles.footerUl}`}>
                                    <li><a href="#">Westminister House, Victoria Island, Lagos, Nigeria.</a></li>
                                    <li><a href="#">contact@greenbondfinancialcompany.com</a></li>
                                    <li><a href="#">+234 700 933 933 933</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h6 style={{ color: '#47522a'}}>Company</h6>
                            <ul className={`list-unstyled footer-ul mt-1 ${footerStyles.footerUl}`}>
                                <li><a href="">About us</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Awards</a></li>
                                <li><a href="">Media</a></li>
                                <li><a href="">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 style={{ color: '#47522a'}}>Products &amp; Services</h6>
                            <ul className={`list-unstyled footer-ul mt-1 ${footerStyles.footerUl}`}>
                                <li><a href="">Investments</a></li>
                                <li><a href="">Loans</a></li>
                                <li><a href="">Savings</a></li>
                                <li><a href="">Bill Payments</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 style={{ color: '#47522a'}}>Connect & Help</h6>
                            <ul className={`list-unstyled footer-ul mt-1 ${footerStyles.footerUl}`}>
                                <li><a href="">Self Help</a></li>
                                <li><a href="">Live Chat</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Branches</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h6 style={{ color: '#47522a'}}>Download</h6>
                            <div>
                                <a className={`btn shadow btn-xs`} style={{ fontSize: '10px' }}>
                                    <Image src="/apple-logo.png" layout="fixed" width={15} height={15} alt=""/>
                                    <span  style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>Get on iPhone</span>
                                </a>
                                <a className={`btn shadow btn-xs`} style={{ fontSize: '10px'}}>
                                    <Image src="/google-play.png" layout="fixed" width={15} height={15} alt=""/>
                                    <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                        Get On Android
                                    </span>
                                </a>
                                <a className={`btn shadow btn-xs`} style={{ fontSize: '10px' }}>
                                    <Image src="/browser.png" layout="fixed" width={15} height={15} alt=""/>
                                    <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                        Use On Browser
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h6 style={{ color: '#47522a'}}>Online Banking Terms &amp; Agreements</h6>
                    <div className="mt-4" style={{ color: '#56613b', fontSize: '.8rem', lineHeight: '1.8' }}>
                        <p>Loans, lines of credit and credit cards are subject to credit approval.</p>
                        <p>
                            Services provided by the following affiliates of GreenBond Financial Company: Banking products and services, 
                            including loans and deposit accounts, are provided by GreenBond Financial Company. 
                            Trust and investment management services are provided by GreenBond Financial Company. 
                            Investment advisory services are offered by GreenBond Financial Company Advisory Services.
                        </p>
                        <p>
                            The information contained herein is for informational purposes only and does not represent an official statement of your 
                            GreenBond Financial Company Investment Services, Inc. account. Please refer to your monthly or quarterly statements for 
                            a complete record of your transactions, holdings, and balances.
                        </p>
                        <p>
                            Investing in securities involves risks, and there is always the potential of losing money when you invest in securities. 
                            You should review any planned financial transactions that may have tax or legal 
                            implications with your personal tax or legal advisor.
                        </p>
                    </div>
                    <hr/>
                    <ul className="list-inline d-flex">
                        <li className="mr-3"><a href="">
                            <Image src="/icons8-facebook-48.png" layout="fixed" width={30} height={30} alt=""/></a>
                        </li>
                        <li className="mr-3"><a href="">
                            <Image src="/icons8-twitter-48.png" layout="fixed" width={30} height={30} alt=""/>
                            </a>
                        </li>
                        <li><a href="">
                            <Image src="/icons8-instagram-48.png" layout="fixed" width={30} height={30} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer