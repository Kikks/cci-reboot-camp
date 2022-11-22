import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Merchandise.css'
const Merchandise = () => {
    return (
        <section className='w-full p-[30px] sm:p-[100px]'>
            <h1 className='text-3xl font-bold my-6 md:my-10 lg:my-26 text-center text-primary-main'>Our Merch</h1>
            <div className="container">
                <LazyLoadImage
                    src={
                        "/images/merch.png"
                    }
                    className=' h-full w-full object-contain '
                />
                <Link to='/shop'>

                    <div className="overlay flex justify-center items-center">
                        <div className='bg-white rounded-full   px-4 py-2 gap-4 flex justify-center items-center cursor-pointer border border-primary-main md:w-[200px] md:h-[60px]'>
                            <p className='text-primary-main text-lg'>Shop Merch</p>
                            <Icon
                                icon='akar-icons:arrow-right'
                                className='text-xl md:text-lg text-primary-main'
                            />
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Merchandise