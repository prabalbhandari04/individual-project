import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext';

import BloodIcon from '../../../assets/icons/blood-drop-svgrepo-com.svg';
import Gender from '../../../assets/icons/gender-svgrepo-com.svg';
import Mail from '../../../assets/icons/mail-ru-svgrepo-com.svg';
import Contact from '../../../assets/icons/phone-call-svgrepo-com.svg';
import UserAppointment from '../UserAppointment';
import Records from './Records';
import Stats from './Stats';

const userData = {
    _id: '019151a15ba',
    name: 'Miku Nakano',
    gender: 'Female',
    blood: 'A-',
    email: 'miku.98@mail.com',
    contact: '+977-9841551846',
    profile_picture: 'https://i.pinimg.com/236x/81/d1/9b/81d19b249247fa8b26ff7d80a0322738.jpg'
}

const iconClass = (index) => {
    if (index === true) {
        return 'w-4 h-4';
    }
}

const UserDetail = ({ handleEdit }) => {
    const { activeTab } = useContext(UserContext);
    const [user, setUser] = useState(true);

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
                                user ?
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary' onClick={handleEdit}>EDIT</button>
                                )
                                :
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary' onClick={() => setUser(true)}>BOOK</button>
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
                    <h1 className='text-xl font-bold uppercase'>Personal Note</h1>
                    <div className='w-1/2 h-[2px] bg-black mb-4'/>
                    <p className='text-sm font-light'>Prone to tonsils and gum related problems</p>
                </div>
            </div>

            {/* Main Contents */}
            {
                activeTab === 1 ? 
                <Stats />
                :
                activeTab === 2 ?
                <Records />
                :
                <UserAppointment />
            }
        </div>
    )
}

export default UserDetail;