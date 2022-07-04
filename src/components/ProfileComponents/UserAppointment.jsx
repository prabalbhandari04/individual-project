import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import Appointments from './Appointments'

// const dummy = [
//     {
//         id: 1,
//         status: "In Progress",
//         appointments: [
//             {
//                 id: 1,
//                 name: "John Doe",
//                 img: "https://picsum.photos/id/1/367/267",
//                 date: "2020-01-01",
//                 time: "10:00",
//                 reason: "Sore throat"
//             },
//             {
//                 id: 2,
//                 name: "Sid Vicious",
//                 img: "https://picsum.photos/id/1005/367/267",
//                 date: "2020-01-04",
//                 time: "13:00",
//                 reason: "Skin infection",
//             }
//         ]
//     },
//     {
//         id: 2,
//         status: "Completed",
//         appointments: [
//             {
//                 id: 3,
//                 name: "Justin Scout",
//                 img: "https://picsum.photos/id/1048/367/267",
//                 date: "2019-08-17",
//                 time: "10:00",
//                 reason: "Sore throat",
//             }
//         ]
//     }
// ]

const dummy_patient = [
    {
        id: 1,
        name: "John Doe",
        img: "https://picsum.photos/id/1/367/267",
        date: "2020-01-01",
        time: "10:00",
        reason: "Sore throat",
        status: 'Progress'
    },
    {
        id: 2,
        name: "Sid Vicious",
        img: "https://picsum.photos/id/1005/367/267",
        date: "2020-01-04",
        time: "13:00",
        reason: "Skin infection",
        status: 'Completed'
    },
    {
        id: 3,
        name: "Justin Scout",
        img: "https://picsum.photos/id/1048/367/267",
        date: "2019-08-17",
        time: "10:00",
        reason: "Sore throat",
        status: 'Completed'
    }
]

const dummy_doctor = [
    {
        id: 1,
        name: "Jim Henson",
        img: "https://images.unsplash.com/photo-1621964614855-04b453f05d5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        date: "2020-01-01",
        time: "10:00",
        reason: "Sore throat",
        status: 'Progress'
    },
    {
        id: 2,
        name: "Helen Hunt",
        img: "https://images.unsplash.com/photo-1576180616247-f0523fd483ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxyYW5kb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        date: "2020-01-04",
        time: "13:00",
        reason: "Skin infection",
        status: 'Completed'
    },
    {
        id: 3,
        name: "Mark Wahlberg",
        img: "https://images.unsplash.com/photo-1521112376370-0a3b01544ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxyYW5kb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        date: "2019-08-17",
        time: "10:00",
        reason: "Sore throat",
        status: 'Completed'
    },
    {
        id: 4,
        name: "Dwayne Moore",
        img: "https://images.unsplash.com/photo-1558032040-b55d2adb9745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxyYW5kb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        date: "2020-01-04",
        time: "13:00",
        reason: "Cardiomyopathy",
        status: 'Progress'
    },
]

// const Appointment = ({ appointment_status }) => {
//     return (
//         <>
//             {dummy2.filter(data => data.status === {appointment_status}).map((data, index) => (
//                 <div className='w-11/12 flex justify-between items-center bg-gray_light p-4' key={index}>
//                     <div className='flex flex-col items-center gap-y-4'>
//                         <h5 className='text-lg font-medium text-black'>Doctor</h5>
//                         <div className='flex gap-x-2 items-center'>
//                             <img src={data.img} alt='doctor' className='w-12 h-12 rounded' />
//                             <p className='text-base font-light'>{data.name}</p>
//                         </div>
//                     </div>
//                     <div className='flex flex-col items-center gap-y-4'>
//                         <h5 className='text-lg font-medium text-black'>Date</h5>
//                         <p className='text-base font-light'>{data.date}</p>
//                     </div>
//                     <div className='flex flex-col items-center gap-y-4'>
//                         <h5 className='text-lg font-medium text-black'>Time</h5>
//                         <p className='text-base font-light'>{data.time}</p>
//                     </div>
//                     <div className='flex flex-col items-center gap-y-4'>
//                         <h5 className='text-lg font-medium text-black'>Reason</h5>
//                         <p className='text-base font-light'>{data.reason}</p>
//                     </div>
//                     <div className='flex flex-col items-center gap-y-4'>
//                         <h5 className='text-lg font-medium text-black'>Status</h5>
//                         <select className='border-[0.5px] border-gray_dark px-4 py-2 bg-transparent'>
//                             <option selected disabled>Set Status</option>
//                             <option value='Success'>Complete</option>
//                             <option value='Failed'>Failed</option>
//                         </select>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }


const UserAppointment = () => {
    const { user } = useContext(UserContext);
    const [dummy2, setDummy2] = useState([]);

    useEffect(() => {
        if (user === 'patient') {
            setDummy2(dummy_patient);
        }
        else {
            setDummy2(dummy_doctor);
        }
    }, [user])

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <h1 className='text-3xl font-bold uppercase text-black'>
                Appointments
            </h1>
            {/* Appointment lists */}
            <div className='flex flex-col gap-y-6'>
                <h2 className='text-xl font-normal uppercase'>In Progress</h2>
                <div className='flex flex-col gap-y-4'> 
                    {dummy2.filter(data => data.status === "Progress").map((data, index) => (
                        <Appointments 
                            img={data.img} 
                            name={data.name} 
                            date={data.date}
                            time={data.time}
                            reason={data.reason}
                            status={data.status}
                            key={index}    
                        />
                    ))}
                </div>

                {/* Past */}
                <h2 className='text-xl font-normal uppercase'>Past</h2>
                <div className='flex flex-col gap-y-1'>
                    {dummy2.filter(data => data.status === "Completed").map((data, index) => (
                        <Appointments 
                            img={data.img} 
                            name={data.name} 
                            date={data.date}
                            time={data.time}
                            reason={data.reason}
                            status={data.status}
                            key={index}    
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserAppointment