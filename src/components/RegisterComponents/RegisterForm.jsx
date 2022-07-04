import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import showPwd from '../../assets/icons/visibility-on.svg'
import hidePwd from '../../assets/icons/visibility-off.svg'
import { useNavigate } from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}


const InputField = ({type, checked, value, disabled}) => (
    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={type} checked={checked} value={value} disabled={disabled}/>
)
const Label = ({value}) => (
    <label className='text-sm font-light'>{value}</label>
)

const RadioButton = ({ label, value, onChange }) => (
      <label className='text-sm font-light flex items-center py-1 gap-x-1'>
        <input type="radio" checked={value} onChange={onChange} className='w-3 h-3'/>
        {label}
      </label>
)

const RegisterForm = ({ userType }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isConfRevealed, setIsConfRevealed] = useState(false)

  const [user, setUser] = useState(initialState)
    const {name, email, password,cf_password, err, success} = user

  const [value, setValue] = useState('Male');

  const handleMaleChange = () => {
    setValue('Male');
  };
  const handleFemaleChange = () => {
    setValue('Female');
  };
  const handleNoChange = () => {
    setValue('Other');
  };

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUser({...user, [name]:value, err: '', success: ''})
}


let navigate = useNavigate();

const  handleClick = e => {

    navigate('/login')
}


const handleSubmit = async e => {
    e.preventDefault()
    if(isEmpty(name) || isEmpty(password))
            return setUser({...user, err: "Please fill in all fields.", success: ''})

    if(!isEmail(email))
        return setUser({...user, err: "Invalid emails.", success: ''})

    if(isLength(password))
        return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
    
    if(!isMatch(password, cf_password))
        return setUser({...user, err: "Password did not match.", success: ''})

    try {
        const res = await axios.post('http://localhost:5000/user/register', {
            name, email, password
        })

        setUser({...user, err: '', success: res.data.msg})

        alert("Successfully registered")

        
        navigate('/login')

    } catch (err) {
        err.response.data.msg && 
        setUser({...user, err: err.response.data.msg, success: ''})
    }
}

  

  return (
        
    <div className='flex flex-col gap-y-8 py-4'>
        {/* Quick Login */}
        <div className='flex gap-x-4 justify-center items-center'>
            <div className='w-16 h-[1px] bg-gray_dark'/>
            <p className='text-sm font-light text-gray_dark'>Register using</p> 
            <div className='w-16 h-[1px] bg-gray_dark'/> 
        </div>
        <div className='flex justify-center gap-x-8'>
            <div className='w-8 h-auto rounded'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' alt='Gmail' className='w-full h-auto rounded hover:-translate-y-1 transition-all'/>
            </div>
            <div className='w-8 h-auto rounded'>    
                <img src='https://www.picng.com/upload/letter_f/png_letter_f_50740.png' alt='Fb' className='w-full h-auto rounded scale-150 hover:-translate-y-1 transition-all'/>
            </div>
            <div className='w-8 h-auto rounded'>    
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' alt='Insta' className='w-full h-auto rounded hover:-translate-y-1 transition-all'/>
            </div>
        </div>

        {/* Casual */}
        <div className='flex gap-x-4 justify-center items-center'>
            <div className='w-16 h-[1px] bg-gray_dark'/>
            <p className='text-sm font-light text-gray_dark'>or</p> 
            <div className='w-16 h-[1px] bg-gray_dark'/> 
        </div>  
        <form onSubmit={handleSubmit} className='flex flex-col justify-start px-4 gap-y-1'>
            <div>
                <Label value='User Type' />
                <InputField type='email' value={userType} disabled='true'/>
            </div>

            {/* <div>
                <label value='Email' />
                <input type='email' value={email} name="email" onChange={handleChangeInput}/>
            </div>
            <div>
                <label value='Full Name' />
                <input type='text' value={name} name="name" onChange={handleChangeInput}/>
            </div> */}

                <div>
                    <label htmlFor="name">Name</label>
                     <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

            <div>
                <label value='Date of Birth' />
                <InputField type='date' />
            </div>
            <div> 
                <label value='Gender' />
                <div className='flex justify-between'>
                    <div>
                        <RadioButton
                            label="Male"
                            value={value === "Male"}
                            onChange={handleMaleChange}
                        />
                    </div>
                    <div>
                        <RadioButton
                            label="Female"
                            value={value === "Female"}
                            onChange={handleFemaleChange}
                        />
                    </div>
                    <div>
                        <RadioButton
                            label="Other"
                            value={value === "Other"}
                            onChange={handleNoChange}
                        />
                    </div>
                </div>
            </div>
            {
                userType === 'Doctor' &&
                (
                    <>
                        <div>
                            <Label value='Qualification' />
                            <InputField type='text' />
                        </div>
                        <div>
                            <Label value='PAN' />
                            <InputField type='number' />
                        </div>
                    </>
                )
            }
            <div>
                <label className='text-sm font-light'>Password</label>
                <div className='relative'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' value={password} name="password" onChange={handleChangeInput} type={isRevealed ? "text" : "password"} />
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
                <label className='text-sm font-light'>Confirm Password</label>
                <div className='relative'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' value={cf_password} name="cf_password" onChange={handleChangeInput} type={isConfRevealed ? "text" : "password"} />
                    <img 
                        title={isConfRevealed ? 'Hide Password' : 'Show Password'}
                        src={isConfRevealed ? showPwd : hidePwd}
                        className='w-6 h-6 absolute right-3 top-1 m-1'
                        alt='Visibility Icon'
                        onClick={() => setIsConfRevealed(!isConfRevealed)}
                    />
                </div>
            </div>
            
            <button className='w-full p-2 bg-primary text-white rounded-sm text-sm font-bold hover:bg-secondary my-4'>Register</button>
            <p className='text-sm font-light'>
                Already have an account? {" "}
                <span className='text-sm font-medium text-primary cursor-pointer' onClick={handleClick}>
                    Login
                </span>
            </p>
        </form>
      </div>
  )
}

export default RegisterForm