import React from 'react'
import '../whatido/WhatIDo.css'
import { SouthEast } from '@mui/icons-material'

function WhatIDo() {
    return (
        <div className=' do_container ' >
            <div className='left_side' >
                <h4 className='heading_style_h3 ' >(What I Do)</h4>
                <SouthEast className='flex justify-end' variant="contained" fontSize='medium' color="black" />
            </div>
            <div className='right_side'>
                    <div className='flex  parent1 ' >
                        <div className='child1_container '>
                            <h2 className='heading_style_h2'>
                                Digital Design
                            </h2>
                            <p className='text-gray-500 py-4 text-justify font-medium	'>
                                I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.
                            </p>
                        </div>
                        <div className='child2_container '>
                            <h2 className='heading_style_h2'>
                                Art Direction
                            </h2>
                            <p className='text-gray-500 py-4 text-justify font-medium'>
                                My art direction expertise ensures that your project is on brand, on message, and visually stunning. Let's tell your story together.
                            </p>
                        </div>

                    </div>
                    <div className='flex  parent2 ' >
                        <div className='child1_container'>
                            <h2 className='heading_style_h2'>
                            Interaction Design
                            </h2>
                            <p className='text-gray-500  py-4 text-justify font-medium'>
                            I specialize in designing intuitive user experiences that are both functional and beautiful.
                            </p>
                        </div>
                        <div className='child2_container'>
                            <h2 className='heading_style_h2'>
                            Motion Design
                            </h2>
                            <p className='text-gray-500  py-4 text-justify font-medium'>
                            From animated logos to explainer videos, I bring your message to life with visually stunning motion design.
                            </p>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default WhatIDo