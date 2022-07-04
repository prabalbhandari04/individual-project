import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Appointments = ({img, name, date, time, reason, status, key}) => {
    const { user } = useContext(UserContext);

    return (
        <div 
            className='w-full md:w-11/12 flex flex-wrap flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center bg-gray_light p-4' 
            key={key}
        >
            <div className='flex flex-col items-center gap-y-4'>
                {
                    user === 'patient' ?
                    (
                        <h5 className='text-lg font-medium text-black'>Doctor</h5>
                    ):
                    (
                            <h5 className='text-lg font-medium text-black'>Patient</h5>

                    )
                }
                <div className='flex gap-x-2 items-center'>
                    <img src={img} alt='profile_picture' className='w-12 h-12 rounded' />
                    <p className='text-base font-light'>{name}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Date</h5>
                <p className='text-base font-light'>{date}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Time</h5>
                <p className='text-base font-light'>{time}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Reason</h5>
                <p className='text-base font-light'>{reason}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Status</h5>
                {
                    status === "Progress" ?
                    (
                        <select className='border-[0.5px] border-gray_dark px-4 py-2 bg-transparent'>
                            <option selected disabled>Set Status</option>
                            <option value='Success'>Complete</option>
                            <option value='Failed'>Failed</option>
                        </select>
                    )
                    :
                    (
                        <p className='text-base font-light text-primary'>{status}</p>
                    )
                }
            </div>
        </div>
  )
}

export default Appointments