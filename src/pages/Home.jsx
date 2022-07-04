import React from 'react'
import Navbar from '../components/Navbar';
import Welcome from '../components/LandingComponents/Welcome';

const Home = () => {
   
    return (
        <div className='flex flex-col w-full min-h-screen items-center'>
            <Navbar />
            <Welcome />
        </div>
    )
}

export default Home