import React from 'react'
import '../about/About.css'
import { Instagram, SportsBasketball, Twitter } from '@mui/icons-material'


function About() {
    return (
        <div className='text_container flex-row py-16'>
            <div className='left_side_text ' >
                <p className='heading_medium' >
                    As a digital designer, I focus on producing top-notch and impactful digital experiences.
                </p>
            </div>
            <div className='right_side_text'>
                <p className='about_text'>
                    (About Me)
                </p>
                <div className="social_container flex-row flex gap-3  ">
                    <div className="social_body">
                        <Instagram variant="contained" fontSize='small' className='text-violet-50' />
                    </div>
                    <div className="social_body">
                        <Twitter variant="contained" fontSize='small' className='text-violet-50 ' />
                    </div>
                    <div className="social_body">
                        <SportsBasketball variant="contained" fontSize='small' className='text-violet-50' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About