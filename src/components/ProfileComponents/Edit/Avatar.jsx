import React from 'react'
import Button from '../../Button'
import { IoIosArrowRoundBack } from 'react-icons/io';

const data = {
    _id: '019151a15ba',
    name: 'Miku Nakano',
    gender: 'Female',
    blood: 'A-',
    email: 'miku.98@mail.com',
    contact: '+977-9841551846',
    profile_picture: 'https://i.pinimg.com/236x/81/d1/9b/81d19b249247fa8b26ff7d80a0322738.jpg'
}

const Avatar = ({ back }) => {
  return (
    <div className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl font-bold uppercase text-black'>Change avatar</h1>
        <div className='flex flex-col gap-y-4'>
            <img src={data.profile_picture} alt="Profile_Picture" className='w-36 h-36 object-cover object-top rounded'/>
            <label className='text-base font-regular text-primary cursor-pointer' htmlFor='fileUpload'>Change Avatar</label>
            <input type="file" className='hidden' id='fileUpload'/>
            <Button value="Save" />
        </div>
    </div>  
  )
}

export default Avatar