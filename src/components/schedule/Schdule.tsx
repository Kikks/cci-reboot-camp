import React from 'react'

const Schdule = () => {
  return (
      <div className='w-full p-[30px] sm:px-[100px]'>
          <h1 className='text-3xl md:ml-auto font-bold my-6 md:my-10 lg:my-26 text-center text-primary-main '>Program Schedule</h1>
          <div className='my-6 md:my-10'>
              <div className='bg-[#BFBCBC] opacity-50 w-full p-4'>
                  <p className='font-expose font-bold text-xl'>Friday,  December 9, 2022</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-6 md:my-8'>
                  <p>5:00pm - 8:00pm</p>
                  <p>Evening Session</p>
              </div>
              
          </div>
          <div className='my-6 md:my-10'>
              <div className='bg-[#071C5A]  w-full p-4'>
                  <p className='font-expose font-bold text-xl text-white'>Saturday,  December 10, 2022</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-4 md:my-8'>
                  <p>6:00am - 12:00pm</p>
                  <p>Morning Session</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-4 md:my-8'>
                  <p>2:00pm - 4:00pm</p>
                  <p>Afternoon Session</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-4 md:my-8'>
                  <p>6:00pm - 9:00pm</p>
                  <p>Evening Session</p>
              </div>
              
          </div>

          <div className='my-6 '>
              <div className='bg-primary-main  w-full p-4'>
                  <p className='font-expose font-bold text-xl text-white'>Sunday,  December 11, 2022</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-4 md:my-8'>
                  <p>8:00am - 11:00am</p>
                  <p>Morning Session</p>
              </div>
              <div className='lg:w-[30%] w-full flex justify-between text-primary-main font-expose my-4 md:my-8'>
                  <p>1:00pm - 4:00pm</p>
                  <p>Afternoon Session</p>
              </div>
              
              
          </div>
          

      </div>
  )
}

export default Schdule