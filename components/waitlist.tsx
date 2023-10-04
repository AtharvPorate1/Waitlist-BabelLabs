import React from 'react'
import Link from 'next/link'
const Waitlist = () => {
  return (
    <div>
      <div>
  <div>

  </div>
          <div className='h-screen w-screen bg-black flex justify-center items-center text-white sm:justify-center sm:items-center'>
              <div className='w-full max-w-[40%] mx-auto'> 


              <h1 className='text-5xl font-extrabold mb-4 relative dark:drop-shadow-[0_0_0.9rem_#ffffff90] font-mono md:text-6xl md:font-extrabold'> BabelLabs </h1>
              <p className='text-sm text-white/60 mb-4 font-mono md:text-2xl '>Join Us in creating a world with no language barrier</p>

              <div className='flex flex-row gap-2 '>
                  <input type="email" className="bg-slate-900 rounded text-white text-xs px-2 py-1 md:px-4 md:py-2 border-1" placeholder='example@gmail.com' />
                  <span>

                  <Link href="/">
                  <button className='bg-blue-600 rounded text-white text-xs px-4 py-1 md:px-4 md:py-2 '>Get Started</button>
                  </Link>
                  </span>
        
              </div>
              </div>
              
          </div>

       
          
  </div>
    </div>
  )
}

export default Waitlist
