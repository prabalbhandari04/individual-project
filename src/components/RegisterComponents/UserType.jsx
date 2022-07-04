import React from 'react'

const UserType = ({ handleDoctorClick, handlePatientClick }) => {
  return (
    <div className='flex flex-col justify-start p-4 gap-y-1 py-8'>
        <div className='flex justify-center gap-x-2 items-center'>
            <div className='w-16 h-[1px] bg-gray_dark' />
            <p className='text-xs text-gray_dark font-light'>JOIN US AS</p>
            <div className='w-16 h-[1px] bg-gray_dark' />
        </div>

        <div className='flex justify-center gap-x-8 py-8'>
            <div className='flex flex-col items-center'>   
                <img 
                    src='https://ak.picdn.net/shutterstock/videos/1010817809/thumb/1.jpg' 
                    alt='Doctor' 
                    className='w-24 h-24 object-cover object-left hover:brightness-95 rounded'
                    onClick={handleDoctorClick}
                />
                <h4 className='text-sm font-light'>Doctor</h4>
            </div>
            <div className='flex flex-col items-center'>   
                <img 
                    src='https://t4.ftcdn.net/jpg/03/63/49/67/360_F_363496740_ubnvMe8eT6dSj1dcr9upv5KYnWbOMXr6.jpg' 
                    alt='Patient' 
                    className='w-24 h-24 object-cover object-center hover:brightness-95 rounded'
                    onClick={handlePatientClick}
                />
                <h4 className='text-sm font-light'>Patient</h4>
            </div>
        </div>
    </div>
  )
}

export default UserType