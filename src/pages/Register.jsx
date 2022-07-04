import React, { useState } from 'react'
import RegisterForm from '../components/RegisterComponents/RegisterForm'
import UserType from '../components/RegisterComponents/UserType';

const Register = () => {
  const [step, setStep] = useState("1")
  const [type, setType] = useState('Null')


  const handleDoctor = () => {
    setType('Doctor')
    setStep("2")
    console.log(type)
  }
  const handlePatient = () => {
    setStep("2");
    setType('Patient')
    console.log(type)
  }

  return (
    <div className='flex w-full h-screen bg-white'>
        {/* Actual Content */}
        <div className='flex w-full lg:w-1/3 h-full justify-start flex-col items-center py-16'>
          <h1 className='text-2xl font-bold'>CREATE AN ACCOUNT</h1>
          {
            step === "1" 
            ? 
            <UserType handleDoctorClick={handleDoctor} handlePatientClick={handlePatient}/> 
            : 
            <RegisterForm userType={type}/> 
          }

        </div>

        {/* Tutorial */}
        <div className='hidden lg:flex w-2/3 h-full lg:flex-col items-center fixed right-0 bg-gray_light'>
        </div> 
    </div>
  )
}

export default Register