import React from 'react'
import NavBar from '../components/NavBar'
import BannerArea from '../components/BannerArea'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const landing = () => {
    return (
        <div>
            <NavBar/>
            <BannerArea/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default landing