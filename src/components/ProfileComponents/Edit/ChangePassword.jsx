import React, { useState } from 'react'
import showPwd from '../../../assets/icons/visibility-on.svg'
import hidePwd from '../../../assets/icons/visibility-off.svg'

import { IoIosArrowRoundBack } from 'react-icons/io';
import Button from '../../Button';

const ChangePassword = ({ back }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isRevealedNew, setIsRevealedNew] = useState(false)
  const [isRevealedNewConf, setIsRevealedNewConf] = useState(false)

  return (
    <form className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl uppercase font-bold text-black'>Change Password</h1>
        <div className='flex flex-col gap-y-4'>
            <div>
                <label>Current Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealed ? "text" : "password"} />
                    <img 
                    title={isRevealed ? 'Hide Password' : 'Show Password'}
                    src={isRevealed ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealed(!isRevealed)}
                    />
                </div>
            </div>

            <div>
                <label>New Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealedNew ? "text" : "password"} />
                    <img 
                    title={isRevealedNew ? 'Hide Password' : 'Show Password'}
                    src={isRevealedNew ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealedNew(!isRevealedNew)}
                    />
                </div>
            </div>
            
            <div>
                <label>Confirm New Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealedNewConf ? "text" : "password"} />
                    <img 
                    title={isRevealedNewConf ? 'Hide Password' : 'Show Password'}
                    src={isRevealedNewConf ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealedNewConf(!isRevealedNewConf)}
                    />
                </div>
            </div>

            <Button value="Save" />
        </div>
    </form>
  )
}

export default ChangePassword