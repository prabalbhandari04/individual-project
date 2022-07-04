import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Lock from '../../assets/images/lock.png'
import Call from '../../assets/images/call.png'
import Prescribe from '../../assets/images/medi.jpg'
import Engagements from './Engagements';
import Doctors from './Doctors';
import FAQs from './FAQs';
import Footer from '../Footer';

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='absolute bottom-0 w-full h-16 white-gradient z-10 flex flex-col items-center gap-y-8 md:gap-y-24'>
            <div className='w-full px-4 flex flex-col md:flex-row justify-between items-center gap-y-4 pt-28'>
                <img src={Lock} alt='safe' className='w-96 h-auto' data-aos="fade-up"/>
                <div className='w-full md:w-1/2 flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">SAFEKEEP YOUR HEALTH <span className="text-primary">RECORDS</span> WITH US</h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pretium tortor. Donec quis sapien at odio porta pulvinar eget at massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Morbi ac sollicitudin nunc. Duis feugiat nisi id leo commodo, in consectetur quam dapibus. Proin molestie porttitor tellus, ut bibendum erat maximus in. 
                    </p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-y-4'>
                <div className='w-full md:w-1/2 flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">GET IN TOUCH AND CONSULT WITH SPECIALIST <span className="text-primary">ANYTIME ANYWHERE</span></h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pretium tortor. Donec quis sapien at odio porta pulvinar eget at massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Morbi ac sollicitudin nunc. Duis feugiat nisi id leo commodo, in consectetur quam dapibus. Proin molestie porttitor tellus, ut bibendum erat maximus in. 
                    </p>
                </div>
                <img src={Call} alt='call' className='w-96 h-auto' data-aos="fade-up"/>
            </div>
            <div className='w-full px-4 flex flex-col md:flex-row justify-between items-center gap-y-4 pb-20'>
                <img src={Prescribe} alt='Med' className='w-96 h-auto' data-aos="fade-up"/>
                <div className='w-full md:w-1/2 flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">GET PRESCRIBED EASILY AND <span className="text-primary">INSTANTLY</span></h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pretium tortor. Donec quis sapien at odio porta pulvinar eget at massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Morbi ac sollicitudin nunc. Duis feugiat nisi id leo commodo, in consectetur quam dapibus. Proin molestie porttitor tellus, ut bibendum erat maximus in. 
                    </p>
                </div>
            </div>
            <Engagements />
            <Doctors />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Services