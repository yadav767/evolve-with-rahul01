import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center z-[100] inset-0  fixed bg-white'>
        <div className="flex px-2 font-semibold max-sm:text-4xl ">
            <div className='text-[43px] text-black first'>Evolve</div>
            <div className='text-[43px] text-black second'>With</div>
            <div className='text-[43px] text-black third'>Rahul</div>
        </div>
    </div>
  )
}

export default Loader