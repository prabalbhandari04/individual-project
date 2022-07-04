import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';

import BloodIcon from '../../../assets/icons/blood-drop-svgrepo-com.svg';
import Gender from '../../../assets/icons/gender-svgrepo-com.svg';
import Mail from '../../../assets/icons/mail-ru-svgrepo-com.svg';
import Contact from '../../../assets/icons/phone-call-svgrepo-com.svg';
import UserAppointment from '../UserAppointment';
import Stats from './Stats';
import AppointmentRequests from './AppointmentRequests';

const userData = {
    _id: '0188ab159c',
    name: 'Dr. Inuman',
    gender: 'Male',
    blood: 'A+',
    email: 'paul.98@mail.com',
    contact: '+977-9801491812',
    profile_picture: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    degree: 'MBBS',
    expertise: 'Cardiology'
}

const iconClass = (index) => {
    if (index === true) {
        return 'w-4 h-4';
    }
}

const DoctorDetail = ({ handleEdit }) => {
    const { activeTab, user } = useContext(UserContext);

    return (
        <div className='w-full flex flex-col gap-y-16 px-4'>  
            <div className='w-full h-fit flex flex-col lg:flex-row gap-x-8 gap-y-4' key={userData._id}>
                {/* Personal */}
                <div className='w-full lg:flex-1 flex flex-col md:flex-row items-center md:items-start gap-x-4'>
                    <img 
                        src={userData.profile_picture} alt='ProfilePicture' 
                        className='w-36 h-36 object-cover object-top rounded'
                    />
                    {/* Details */}
                    <div className='flex flex-col justify-between flex-1 py-1 gap-y-14'>
                        <div className='w-full h-fit flex flex-col md:flex-row items-center md:items-start justify-between gap-y-4'>
                            <h1 className='text-2xl font-semibold text-black uppercase'>{userData.name}</h1>
                            {
                                user === 'doctor' ?
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary' onClick={handleEdit}>EDIT</button>
                                )
                                :
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary'>BOOK</button>
                                )
                            }
                        </div>
                        <div>
                            {/* Blood, gender, mail and contact */}
                            <div className='w-full h-fit flex flex-col items-center md:flex-row md:items-start justify-between gap-y-4 '>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Gender} alt='Gender' className={`${iconClass(true)}`}/>
                                    <p>{userData.gender}</p>
                                </div>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={BloodIcon} alt='BloodIcon' className={`${iconClass(true)}`}/>
                                    <p>{userData.blood}</p>
                                </div>
                            </div>
                            <div className='w-full h-fit flex flex-col items-center md:flex-row md:items-start justify-between gap-y-4'>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Mail} alt='Mail' className={`${iconClass(true)}`}/>
                                    <p>{userData.email}</p>
                                </div>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Contact} alt='Contact' className={`${iconClass(true)}`}/>
                                    <p>{userData.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Note */}
                <div className='w-full py-8 px-4 lg:px-0 lg:py-0 lg:flex-1 note rounded flex justify-center items-center flex-col'>
                    <h1 className='text-xl font-bold uppercase'>Expertise</h1>
                    <div className='w-1/2 h-[2px] bg-black mb-4'/>
                    <p className='text-sm font-light'><strong>Degree</strong>: {userData.degree}</p>
                    <p className='text-sm font-light'><strong>Expertise</strong>: {userData.expertise}</p>
                </div>
            </div>

            {/* Main Contents */}
            {
                activeTab === 1 ? 
                (
                    <>
                        <AppointmentRequests />
                        <Stats />
                    </>
                )
                :
                <UserAppointment />
            }
        </div>
    )
}

export default DoctorDetail;