'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutSectionTwo = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div
            ref={ref}
            className='bg-[#4D55CC] mt-20 my-10 lg:max-w-6xl flex lg:flex-row flex-col lg:gap-0 gap-8 lg:items-center justify-between mx-auto p-16 lg:rounded-lg text-white'
        >
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && <CountUp end={8} duration={2} suffix="+"/>}
                </h1>
                <p className='font-semibold text-2xl'>
                    World-Wide <br /> Branches
                </p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && <CountUp end={20} duration={2} suffix="+" />}
                </h1>
                <p className='font-semibold text-2xl'>
                    Professional <br /> Expert
                </p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && <CountUp end={250} duration={3} suffix="+" />}
                </h1>
                <p className='font-semibold text-2xl'>
                    Completed <br /> Projects
                </p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && <CountUp end={8} duration={2} suffix="+"/>}
                </h1>
                <p className='font-semibold text-2xl'>
                    Year of <br /> Experience
                </p>
            </div>
        </div>
    );
};

export default AboutSectionTwo;
