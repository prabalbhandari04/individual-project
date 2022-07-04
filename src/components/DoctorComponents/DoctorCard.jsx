import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const doctorLists = [
  {
    id: 1,
    name: 'Dr. Inuman',
    posiition: 'Physiotherapist',
    status: 'offline',
    awards: [
      {
        id: 1,
        name: 'Best',
        src: '💯',
      },
      {
        id: 2,
        name: 'Kind',
        src: '🤗',
      },
    ],
    avatar: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Dr. Bories',
    posiition: 'Dentist',
    status: 'offline',
    awards: [
      {
        id: 1,
        name: 'Good',
        src: '👍',
      },
    ],
    avatar: 'https://media.istockphoto.com/photos/mature-doctor-holding-medical-records-at-hospital-picture-id1346124955?b=1&k=20&m=1346124955&s=170667a&w=0&h=BlMmV87xEQMzCTFnhfNlpwl58cDVHXCGiatPd-3AotE='
  },
  {
    id: 3,
    name: 'Dr. Shiely',
    posiition: 'Dentist',
    status: 'online',
    awards: [
      {
        id: 1,
        name: 'Kind',
        src: '🤗',
      },
    ],
    avatar: 'https://media.istockphoto.com/photos/medical-doctor-indoors-portraits-picture-id1323303738?b=1&k=20&m=1323303738&s=170667a&w=0&h=EfPDQj0UOiLRyoZy-ZSWi7XYFeRqL4hG0N7GhDla0_I='
  },
]


const DoctorCard = () => {
  const { activeDoctorTab } = useContext(UserContext);
  const [ online, setOnline ] = useState(false);
  
  let navigate = useNavigate();
  const handleNavigateDoctor = () => {
    navigate('/profile/doctor');
  }


  useEffect(() => {
        fetch('https://ayuhbackend-testing.onrender.com/doctor/allinfo')
        .then( res => {
            return res.json();
        })
        .then(doctors => {
            console.log(doctors)
        })
        

}, [])


  
  return (
    <div className='flex flex-col w-full gap-y-8 px-4 lg:px-8'>
      <div className='w-max flex bg-gray_light rounded'>
        {
          online ? 
          (
            <>
              <button className='w-20 bg-gray_light text-black px-4 py-2 rounded-l' onClick={() => setOnline(false)}>
                All
              </button>
              <button className='w-20 bg-primary text-white px-4 py-2 rounded-r'>
                Online
              </button>
            </>
          )
          :
          (
            <>
              <button className='w-20 bg-primary text-white px-4 py-2 rounded-l'>
                All
              </button>
              <button className='w-20 bg-gray_light text-black px-4 py-2 rounded-r' onClick={() => setOnline(true)}>
                Online
              </button>
            </>
          )
        }
      </div>
      <div className='flex gap-16 flex-col md:flex-row'>
        {
          online ?
          (
            <>
              {
                doctorLists.filter(doctor => doctor.posiition.includes(activeDoctorTab)).filter(doctor => doctor.status.includes('online')).map((doctor, index) => (
                  <div className='w-full h-40 lg:w-1/2 flex gap-x-4 rounded' key={index}>
                    <img className='h-full w-36 rounded object-cover object-top' src={doctor.avatar} alt={doctor.name} />
                    <div className='w-full flex flex-col justify-between gap-y-4'>
                      <div className='flex flex-col md:flex-row gap-y-2 justify-between'>
                        <div>
                          <h3 className='text-xl text-black font-semibold'>{doctor.name}</h3>
                          <p className='text-sm text-black font-light'>{doctor.specialization}</p>
                        </div>
                        <button className='px-4 py-2 rounded bg-primary uppercase text-white' onClick={handleNavigateDoctor}>Profile</button>
                      </div>
      
                      <div>
                        <h3 className='text-xl text-black font-medium'>Awards</h3>
                        <div className='flex gap-x-4 gap-y-2'>
                          {
                            doctor.awards.map((award, index) => (
                              <h1 key={index} src={award.src} className='text-2xl font-medium cursor-pointer'>{award.src}</h1>
                            ))
                          }
                        </div>  
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          )
          :
          (
            <>
              {
                doctorLists.filter(doctor => doctor.posiition.includes(activeDoctorTab)).map((doctor, index) => (
                  <div className='w-full h-40 lg:w-1/2 flex gap-x-4 rounded' key={index}>
                    <img className='h-full w-36 rounded object-cover object-top' src={doctor.avatar} alt={doctor.name} />
                    <div className='w-full flex flex-col justify-between gap-y-4'>
                      <div className='flex flex-col md:flex-row gap-y-2 justify-between'>
                        <div>
                          <h3 className='text-xl text-black font-semibold'>{doctor.name}</h3>
                          <p className='text-sm text-black font-light'>{doctor.specialization}</p>
                        </div>
                        <button className='px-4 py-2 rounded bg-primary uppercase text-white' onClick={handleNavigateDoctor}>Profile</button>
                      </div>
      
                      <div>
                        <h3 className='text-xl text-black font-medium'>Awards</h3>
                        <div className='flex gap-x-4 gap-y-2'>
                          {
                            doctor.awards.map((award, index) => (
                              <h1 key={index} src={award.src} className='text-2xl font-medium cursor-pointer'>{award.src}</h1>
                            ))
                          }
                        </div>  
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default DoctorCard