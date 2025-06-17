'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutSectionTwo = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div
            ref={ref}
            className='bg-[#1941f5] p-10  mt-10 flex lg:flex-row flex-col lg:gap-0 gap-8 lg:items-center justify-between text-white'
        >
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && (
                        <>
                            <CountUp end={14} duration={2} />B+
                        </>
                    )}
                </h1>
                <p className='font-semibold text-2xl'>Billed annually</p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && (
                        <>
                            <CountUp end={60} duration={2} />+
                        </>
                    )}
                </h1>
                <p className='font-semibold text-2xl'>Integrations</p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && (
                        <>
                            <CountUp end={99.9} duration={2} decimals={1} />%
                        </>
                    )}
                </h1>
                <p className='font-semibold text-2xl'>Uptime</p>
            </div>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold'>
                    {inView && (
                        <>
                            <CountUp end={1.2} duration={2} decimals={1} />B+
                        </>
                    )}
                </h1>
                <p className='font-semibold text-2xl'>Usage events weekly</p>
            </div>
        </div>
    );
};

export default AboutSectionTwo;
