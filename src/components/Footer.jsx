import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full text-black">
        <div className='w-full lg:w-3/4 min-h-[40vh] mx-auto my-0 flex flex-col gap-y-16'>
          {/* <img src={ECG} alt="----^_^^----" className="w-auto h-16" /> */}
          <div className='w-full h-[1px] bg-gray_light' />
          <div className='flex flex-col gap-y-6 items-center'>
            <h1 className='text-3xl font-black uppercase'>Find Us On</h1>
            <ul className='flex gap-x-8 text-3xl text-gray_dark font-regular'>
              <li className='hover:text-[#4267B2]'><FaFacebook /></li>
              <li className='hover:text-[#E1306C]'><FaInstagram /></li>
              <li className='hover:text-[#5865F2]'><FaDiscord /></li>
              <li className='hover:text-[#00acee]'><FaTwitter /></li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4 items-center'>
            <h1 className='text-3xl font-black'>LOGO</h1>
            <ul className='flex gap-x-8 text-base text-gray_dark font-regular'>
              <Link to="/doctors"><li className='hover:text-primary'>Doctors</li></Link>
              <Link to="/facilities"><li className='hover:text-primary'>Medical Facilities</li></Link>
              <Link to="/terms"><li className='hover:text-primary'>Terms and Conditions</li></Link>
              <Link to="#"><li className='hover:text-primary'>Help</li></Link>
            </ul>
          </div>

          <div className='flex flex-col gap-y-2 items-center pb-2'>
            <div className='w-full h-[1px] bg-gray_light' />
            <p className='text-base font-light text-primary text-center'>
              Copyright © 2022. All rights reserved.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer