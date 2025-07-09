"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaPlayCircle } from "react-icons/lia";
import gsap from "gsap";

const HomeSectionOne = () => {
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
        <div className="px-3 md:px-5 pt-32 lg:pt-56 pb-20 space-y-20 bg-[#faf7f2]">
            {/* === MAIN HERO SECTION === */}
            <div className="gap-0 lg:gap-20 flex flex-wrap lg:flex-nowrap">
                {/* TEXT SIDE */}
                <div className="w-full lg:w-[50%] space-y-10">
                    <h1 className="text-[40px] md:text-[56px] font-bold leading-tight">
                        Achieve Financial Success with AI Powered Insights
                    </h1>
                    <p className="text-[18px] md:text-[21px]">
                        Leverage AI for smarter financial decisions with real-time insights and personalized investment strategies.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <button className="rounded-full px-5 py-4 border border-orange-600 text-[#0b0b0b] text-[18px] flex items-center gap-3">
                            <LiaPlayCircle size={25} className="text-black" />
                            View Demo
                        </button>
                        <button className="rounded-full pl-5 pr-2 py-2 bg-orange-600 text-[#0b0b0b] text-[18px] flex items-center gap-3">
                            Try for free
                            <span className="bg-white p-2 rounded-full">
                                <IoIosArrowRoundForward size={25} className="text-black" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="w-full lg:w-[50%] flex gap-6 relative mt-16 lg:mt-0">
                    {/* Top Left Dash - only on desktop */}
                    <div className="hidden lg:flex items-end w-full">
                        <Image
                            src="/dash-1.svg"
                            alt="dash"
                            width={400}
                            height={200}
                            className="rounded-xl w-full h-[15rem] object-contain shadow-2xl"
                        />
                    </div>

                    {/* Absolute Positioned Dash - only on lg+ */}
                    <div className="hidden lg:block absolute left-[30%] top-[20%] z-10">
                        <Image
                            src="/dash-1.svg"
                            alt="dash overlay"
                            width={400}
                            height={200}
                            className="rounded-xl w-full h-[7rem] object-contain shadow-2xl max-w-[20rem]"
                        />
                    </div>

                    {/* Biller and bottom dash - always visible */}
                    <div className="flex flex-col gap-4 items-center w-full">
                        <Image
                            src="/biller-1.jpg"
                            alt="biller"
                            width={200}
                            height={400}
                            className="rounded-xl w-full h-[20rem] object-cover"
                        />
                        <Image
                            src="/dash-1.svg"
                            alt="dash bottom"
                            width={400}
                            height={200}
                            className="rounded-xl w-full h-[7rem] object-contain shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* === LOGO MARQUEE === */}
            <div className="overflow-hidden">
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
    );
};

export default HomeSectionOne;
