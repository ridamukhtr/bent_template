import React from 'react'
import '../camera/Camera.css'

function Camera({name, designName}) {
    return (
        <div className='flex justify-between  items-center px-3 py-5 camera_container' >
            <div className='left_child' >
                <h2 className='heading_xlarge' >{name}</h2>
            </div>
            <div className='right_child'>
                <p className='text-base  font-medium text-gray-500 text-justify pb-5 '>A cutting-edge digital platform designed to revolutionize the way people interact with technology.</p>
                <div className='flex gap-2'>

                    <div className='desc' >
                        <p className='text-white text-center flex items-center mb-0 text-sm	font-semibold	' >{designName}</p>
                    </div>
                    <div className='desc' >
                        <p className='text-white text-center flex items-center mb-0 text-sm	font-semibold	' >2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Camera