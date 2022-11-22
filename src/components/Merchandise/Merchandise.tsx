import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Merchandise.css'
const Merchandise = () => {
    return (
        <section className='w-full p-[30px] sm:p-[100px]'>
            <div className=' flex items-center lg:w-[50%] md:w-[60%] '>
                <div className='lg:ml-20 ml-10 mb-6'>
                    <img className='ml-14' src='/images/Vector 27.png' alt='star' />
                    <img  src='/images/Vector 31.png' alt='star' />
                </div>
                <h1 className='text-3xl md:ml-auto font-bold my-6 md:my-10 lg:my-26 text-center text-primary-main '>Our Merch</h1>

            </div>
            <div className="container">
                <LazyLoadImage
                    src={
                        "/images/merch.png"
                    }
                    className=' h-full w-full object-contain '
                />

                <Link to='/shop'>

                    <div className="overlay flex justify-center items-center ">
                        <div className='bg-white rounded-full mt-[5em] md:mt-[10em] lg:mt-[15em] xl:mt-[25em]  px-4 py-2 gap-4 flex justify-center items-center cursor-pointer border border-primary-main md:w-[200px] md:h-[60px]'>
                            <p className='text-primary-main text-lg'>Shop Merch</p>
                            <Icon
                                icon='akar-icons:arrow-right'
                                className='text-xl md:text-lg text-primary-main'
                            />
                        </div>
                    </div>
                </Link>

            </div>
            <img className='right-6 absolute' src='/images/Vector 30.png' alt='star' />

        </section>
    )
}

export default Merchandise