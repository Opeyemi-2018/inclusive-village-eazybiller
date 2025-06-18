'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AboutSectionTwo = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="relative overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/code.jpg"
                alt="infra background"
                fill
                className="object-cover z-0"
            />

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-[#084972]/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 p-10 mt-10 flex lg:flex-row flex-col lg:gap-0 gap-8 lg:items-center justify-between text-white">
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold">
                        {inView && (
                            <>
                                <CountUp end={14} duration={2} />B+
                            </>
                        )}
                    </h1>
                    <p className="font-semibold text-2xl">Billed annually</p>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold">
                        {inView && (
                            <>
                                <CountUp end={60} duration={2} />+
                            </>
                        )}
                    </h1>
                    <p className="font-semibold text-2xl">Integrations</p>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold">
                        {inView && (
                            <>
                                <CountUp end={99.9} duration={2} decimals={1} />%
                            </>
                        )}
                    </h1>
                    <p className="font-semibold text-2xl">Uptime</p>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold">
                        {inView && (
                            <>
                                <CountUp end={1.2} duration={2} decimals={1} />B+
                            </>
                        )}
                    </h1>
                    <p className="font-semibold text-2xl">Usage events weekly</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionTwo;
