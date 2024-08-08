import React from 'react'
import '../clients/Clients.css'
import { SouthEast } from '@mui/icons-material'
import client1 from '../../assets/images/client1.png'

function Clients() {
   
    return (
        <>
            <div className=' do_container client_container   ' >

                <div className='left_side h-[130vh]' >
                    <h4 className='heading_style_h3 ' >(My Clients)</h4>
                    <SouthEast className='flex justify-end' variant="contained" fontSize='medium' color="black" />
                </div>

                <div className='right_side  '>
                    <div className='flex  parent1  min-h-[45vh]' >
                        <div className='child1_container '>
                            <h2 className='heading_style_h2 pb-4    '>
                                Exceptional digital design and user experience.
                            </h2>
                            <p className='text-gray-500 py-3 text-justify'>
                                Bent's digital design skills are unmatched. He transformed our website into a beautiful and functional work of art that exceeded our expectations.
                            </p>
                            <div className='client_subContainer'>
                                <div className='client_Img'>
                                    <img className='client1_Img' src={client1} alt="Client" />
                                </div>
                                <div className='flex flex-col'>
                                    <h6 className='client_name mb-1'>John Smith</h6>
                                    <h6 className='client_role mb-0 text-gray-500'>Motion Design</h6>
                                </div>
                            </div>

                        </div>
                        <div className='child2_container '>
                            <h2 className='heading_style_h2'>
                                Art direction that captured our essence.
                            </h2>
                            <p className='text-gray-500 py-3 text-justify'>
                                Working with Bent on art direction was a pleasure. He listened to our ideas and brought his creativity to the table, resulting in a stunning visual brand identity.
                            </p>
                            
                            <div className='client_subContainer '>
                                <div className='client_Img'>
                                    <img className='client1_Img' src={client1} alt="Client" />
                                </div>
                                <div className='flex flex-col '>
                                    <h6 className='client_name mb-1'>John Smith</h6>
                                    <h6 className='client_role mb-0 text-gray-500'>Motion Design</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                   <div className='flex  parent2  ' > 
                        <div className='child1_container x'>
                            <h2 className='heading_style_h2'>
                                Bent's interaction design expertise delivered.
                            </h2>
                            <p className='text-gray-500 py-3 text-justify'>
                                Bent's interaction design made our app user-friendly and intuitive. His creativity and attention to detail resulted in a product that exceeded our expectations
                            </p>
                            <div className='client_subContainer'>
                                <div className='client_Img'>
                                    <img className='client1_Img' src={client1} alt="Client" />
                                </div>
                                <div className='flex flex-col'>
                                    <h6 className='client_name mb-1'>John Smith</h6>
                                    <h6 className='client_role mb-0 text-gray-500'>Motion Design</h6>
                                </div>
                            </div>
                        </div>
                        <div className='child2_container' >
                            <h2 className='heading_style_h2'>
                                Captivating motion design that brought our brand to life.
                            </h2>
                            <p className='text-gray-500 py-3 text-justify'>
                                Bent's motion design is exceptional. He brought our brand to life with stunning animations that captivated our audience.
                            </p>
                            <div className='client_subContainer'>
                                <div className='client_Img'>
                                    <img className='client1_Img' src={client1} alt="Client" />
                                </div>
                                <div className='flex flex-col'>
                                    <h6 className='client_name mb-1'>John Smith</h6>
                                    <h6 className='client_role mb-0 text-gray-500'>Motion Design</h6>
                                </div>
                            </div>
                        </div>

                    </div> 
                </div>

            </div>
        </>

    )
}

export default Clients