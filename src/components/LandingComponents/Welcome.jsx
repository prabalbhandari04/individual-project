import React from 'react'
// import Records from '../../assets/vectors/records.svg'
// import Records from '../../assets/doctor.jpg'
import Doctor from '../../assets/images/doctor.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Services from './Services'

const Welcome = () => {
  return (
    <div className='flex w-full lg:w-3/4 mx-auto my-0 h-screen relative flex-row-reverse px-4 lg:px-0'>
        <img 
            src={Doctor} 
            alt="Records"
            className='hidden md:flex w-full h-full object-cover object-center'
        />
        <div className='flex flex-col absolute left-5 md:left-16 md:w-1/2 h-full justify-center gap-y-4'>
            <h1 className='text-5xl font-black text-black uppercase'>
                KEEP TRACK OF your {" "}
                <span className='text-5xl font-black text-primary uppercase'>
                    health records
                </span>
            </h1>
            <p className='text-sm font-normal text-black capitalize'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pretium tortor. Donec quis sapien at odio porta pulvinar eget at massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Morbi ac sollicitudin nunc. Duis feugiat nisi id leo commodo, in consectetur quam dapibus. Proin molestie porttitor tellus, ut bibendum erat maximus in. 
            </p>

            <div className='flex justify-between mt-4'>
                <button className='px-8 py-2 bg-primary text-white text-base font-medium'>
                    EXPLORE
                </button>
                <div className='md:hidden flex justify-center items-center w-10 h-10 rounded-full bg-primary shadow-md mr-8'>
                    <AiOutlineArrowDown className='down-arrow'/>
                </div>
            </div>
        </div>

        <div className='hidden md:flex justify-center items-center absolute bottom-[4.5rem] md:left-[50%] md:right-[50%] right-4 w-12 h-12 rounded-full bg-primary shadow-md'>
            <AiOutlineArrowDown className='down-arrow'/>
        </div>

        <Services />
    </div>
  )
}

export default Welcome