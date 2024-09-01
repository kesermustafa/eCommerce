import React from 'react'

const Footer = () => {
  return (
      <div className='w-full  bg-[#1F2937] min-h-24 footer'>
        <div className=' flex gap-3 justify-between w-full max-w-[1280px] m-auto p-4 md:p-0 md:pt-4 '>
            <div className='w-22 flex justify-center  h-auto'>
                <img src="src/assets/img/logo.png" className='w-auto h-20' alt=""/>
            </div>
            <div className='shrink gap-3 flex flex-col mb-4 sm:flex-row w-full flex-wrap justify-between'>
                <div className='rounded flex-[1] text-gray-200 flex-wrap text-center '>
                    <ul>
                        <li>Lorem.</li>
                        <li>Excepturi!</li>
                        <li>Amet?</li>
                    </ul>
                </div>
                <div className='rounded flex-[1] text-gray-200 flex-wrap text-center 4 '>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Category</li>
                    </ul>
                </div>
            </div>

        </div>
      </div>

  )
}

export default Footer