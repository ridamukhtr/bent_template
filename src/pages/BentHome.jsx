import React from 'react'
import '../pages/BentHome.css'
import { CallMade, SouthEast } from '@mui/icons-material'
import heroImage from '../assets/images/heroImage.png'
import About from './about/About'
import WhatIDo from './whatido/WhatIDo'
import Slider from './slider/Slider'
import Camera from './camera/Camera'
import Clients from './clients/Clients'
import Footer from './footer/Footer'

function BentHome() {
    return (
        <div className=' main_container' style={{ backgroundColor: '#F5F3EF' }}>
            <div className='px-5' >
                <div className="header_container px-4">
                    <div className="button_container m-5 mt-5">
                        <span className='items-center btn_Body '>0</span>
                    </div>
                    <div className="button_container btn_container ">
                        <span className='items-center btn_Body '>Menu</span>
                    </div>
                </div>
                <div className='h-[100px]'  ></div>

                <h1 className='main_title' >
                    Bent Lindberg <br /><span className='' >Digital Designer</span>
                </h1>
                <div className="home_hero">
                    <h3 className='heading_style_h3'>(Berlin, Germany)</h3>
                    <div className=' flex-row flex items-center gap-2 ' >
                        <SouthEast className=' justify-end' variant="contained" fontSize='medium' color="black" />
                        <h3 className='heading_style_h3'>Scroll down</h3>
                    </div>
                </div>

            </div>

            <div className="">
                <img src={heroImage} className='img_body' />
            </div>

            <div className=" hero_sec">
                <About />
            </div>

            <div className="  hero_sec">
                <WhatIDo />
            </div>

            <div className='flex items-center justify-center ' >
                <Slider />
            </div>

            <div className="imgContainer" >
                <div className="button_container " >
                    <CallMade className='items-center btn_Body ' />
                </div>
            </div>

            <div className='  px-5  ' >
                <Camera name={'Camera'} designName={'Digital Design'} />
            </div>

            <div className="imgContainer camera2">
                <div className="button_container ">
                    <CallMade className='items-center btn_Body ' />
                </div>
            </div>

            <div className=' px-5  ' >
                <Camera name={'Noise'} designName={'Digital Design'} />
            </div>

            <div className="imgContainer noise1">
                <div className="button_container " >
                    <CallMade className='items-center btn_Body ' />
                </div>
            </div>

            <div className='px-5' >
                <Camera name={'Robot'} designName={'Motion Design'} />
            </div>

            <div className="hero_sec">
                <Clients />
            </div>

            <div className="footer bg-black  px-5">
                <Footer/>
            </div>

        </div>
    )
}

export default BentHome