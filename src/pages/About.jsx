import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div className='flex flex-col w-full min-h-screen items-center'>
            <Navbar />
            <br />
            <h1 className='uppercase text-3xl text-black font-bold'>About</h1>
        </div>
    )
}

export default About