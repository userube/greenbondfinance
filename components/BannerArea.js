import React from 'react'
import Image from 'next/image'
import bannerAreaStyles from '../styles/BannerArea.module.css';
import navBarStyles from '../styles/NavBar.module.css';
import { BsCheckSquareFill } from "react-icons/bs";


const BannerArea = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="container">
                                <div className={`${bannerAreaStyles.mainSect}`}>
                                    <h1 className={`${bannerAreaStyles.greenBondMainHeading}`}>
                                        A Strategic Path <br/>
                                        To Giving <br/> 
                                        You a Financial Power
                                    </h1>

                                    <p className="mt-4">
                                        Unlock the power of money with GreenBond Finance Company. 
                                        Invest, Pay bills, transfer money, get instant loans all in one place.
                                    </p>

                                    <div className="mt-4">
                                        <p className={`h5 ${bannerAreaStyles.bannerListTxt}`}>
                                            <span> <BsCheckSquareFill className={`${bannerAreaStyles.Icon}`}/> Loans </span>
                                        </p>
                                        <p className={`h5 ${bannerAreaStyles.bannerListTxt}`}>
                                            <span> <BsCheckSquareFill className={`${bannerAreaStyles.Icon}`}/> Investments</span>
                                        </p>
                                        <p className={`h5 ${bannerAreaStyles.bannerListTxt}`}>
                                            <span> <BsCheckSquareFill className={`${bannerAreaStyles.Icon}`}/> Bill Payments</span>
                                        </p>
                                        <p className={`h5 ${bannerAreaStyles.bannerListTxt}`}>
                                            <span> <BsCheckSquareFill className={`${bannerAreaStyles.Icon}`}/> + More</span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <a className={`btn btn-lg btn-success shadow ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBond}`}>Get On Board</a>
                                    </div>

                                    <div className="mt-4">
                                        <a className={`btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`}>
                                            <Image src="/apple-logo.png" layout="fixed" width={20} height={20} class="mr-3" alt=""/>
                                            <span  style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>Get on iPhone</span>
                                        </a>
                                        <a className={`btn shadow btn-lg ${navBarStyles.btnLgCustom} ${navBarStyles.btnGreenBondOutline}`} style={{ marginLeft: '10px' }}>
                                            <Image src="/google-play.png" layout="fixed" width={20} height={20} alt=""/>
                                            <span style={{ padding: '0 0 0 10px', verticalAlign: 'text-bottom'}}>
                                                Get On Android
                                            </span>
                                        </a>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-5'>
                            <div className={`${bannerAreaStyles.phoneImg}`}>
                                <Image src="/phfl.png" layout="fixed" width={300} height={600} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerArea
