'use client'
import Image from "next/image"
import gsap from "gsap";
import { useEffect, useRef } from "react";
const AboutSectionOne = () => {

    const marqueeRef = useRef<HTMLDivElement>(null);

    const clientLogos = Array(10).fill("/sayswitch-no-bg.png");
    const logos = [...clientLogos, ...clientLogos]; 

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;
            if (!marquee) return;

            gsap.to(marquee, {
                x: "-50%", 
                duration: 40,
                ease: "linear",
                repeat: -1,
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);
    return (
        <section className='py-36 px-3 md:px-5 bg-[#faf7f2]'>
            <div className='max-w-[40rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    About Us
                </span>
                <h1 className='text-[40px]  md:text-[50px] font-bold leading-tight'> About Eazy Biller</h1>
                <p className='text-[18px]  md:text-[20px] text-gray-500'>Eazy Biller is a next-generation, all-in-one financial management platform that transforms how businesses, freelancers, and enterprises handle invoicing, payment collection, and financial automation.</p>
            </div>

            <div className="max-w-[60rem] mx-auto pt-16">
                <div>
                    <Image src={'/eazybiller-2.jpg'} alt="about" width={600} height={600} className="w-full lg:w-[100%] h-[28rem] object-cover rounded-xl" />
                    <div className="overflow-hidden pt-16">
                        <div
                            ref={marqueeRef}
                            className="whitespace-nowrap flex items-center gap-20 w-max"
                        >
                            {logos.map((logo, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-gray-400 font-bold text-1xl">Sayswitch</span>
                                    <div className="w-10 h-10">
                                        <Image
                                            src={logo}
                                            alt={`Client ${index}`}
                                            width={70}
                                            height={70}
                                            className="filter grayscale brightness-[1.8]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionOne