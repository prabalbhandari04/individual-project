import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import Button from '../../Button';

const PersonalDetail = ({ back }) => {
  return (
    <form className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl uppercase font-bold text-black'>Edit Information</h1>
        <div className='flex flex-col gap-y-4'>
            <div>
                <label>Name</label>
                <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2'/>
            </div>

            <div>
                <label>Address</label>
                <div className='flex gap-x-2 w-full'>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='District'/>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='City'/>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='State'/>
                </div>
            </div>

            <div>
                <label>Contact</label>
                <div className='flex'>
                    <div className='w-auto py-2 h-full bg-primary text-white px-4 flex items-center'>+977</div>
                    <input 
                        className='w-full border-[1px] border-gray_light focus:border-gray_light text-base font-light px-4 py-2' 
                    />
                </div>
            </div>

            <div className='flex flex-col gap-y-2'> 
                <label>Gender</label>
                <select className='w-72 px-4 py-2 bg-transparent border-[1px] border-gray_light'>
                    <option selected disabled>Choose Your Gender</option>
                    {['Male', 'Female', 'Do not Specify'].map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>
            
            <div className='flex flex-col gap-y-2'> 
                <label>Blood Group</label>
                <select className='w-72 px-4 py-2 bg-transparent border-[1px] border-gray_light'>
                    <option selected disabled>Choose Your Blood Group</option>
                    {["A+", "A-", "B+", "B-", 'AB+', "AB-", "O+", "O-"].map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Note</label>
                <textarea className='w-full border-[1px] border-gray_light px-4 py-2 focus:border-gray_light'/>
            </div>

            <Button value="Save" />
        </div>
    </form>
  )
}

export default PersonalDetail