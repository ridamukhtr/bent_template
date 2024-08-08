import React from 'react'
import '../footer/Footer.css'

function Footer() {
    return (
        <div className="footer_Container">
            <div className="footer_body py-5 gap-3 flex flex-col items-center text-center">
                <h6 className='text-white heading_style_h3'>(Connect)</h6>
                <h1 className='text-white heading_xlarge'>Let's talk </h1>
                <div className='btn1'>
                    <p className='text-black text-center flex items-center mb-0 text-sm font-semibold'>Get in Touch</p>
                </div>
            </div>

            <div className="footer_grid grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 py-5">
                <div>
                    <h2 className="mb-8 pb-3 text-sm font-semibold text-gray-400">(Pages)</h2>
                    <ul className="pl-0 text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Home</a>
                        </li>
                        <li className='mb-4'>
                            <a href="" className="text-white font-semibold">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Contact</a>
                        </li>
                    </ul>
                    <div className='btn2'>
                        <p className='text-black text-center flex items-center mb-0 text-sm font-semibold'>More Templates</p>
                    </div>
                </div>
                <div>
                    <h2 className="mb-6 pb-3 text-sm font-semibold text-gray-400">(CMS)</h2>
                    <ul className="pl-0 text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Work</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Work Single</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Blog</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Blog Single</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="text-white font-semibold">Shop</a>
                        </li>
                        <li>
                            <a href="" className="text-white font-semibold">Shop Single</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 pb-3 text-sm font-semibold text-gray-400">(Utility Pages)</h2>
                    <ul className="pl-0 text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="text-white font-semibold">404 Error</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-white font-semibold">Password</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-white font-semibold">StyleGuide</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-white font-semibold">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-white font-semibold">Changelog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pb-4'>
                <span className="block font-semibold sm:text-center text-white">© Made by <a href="" className="hover:underline text-white font-semibold">Pawel Gola</a> - Powered by <a className="hover:underline text-white font-semibold">Webflow</a></span>
            </div>
        </div>
    )
}

export default Footer
