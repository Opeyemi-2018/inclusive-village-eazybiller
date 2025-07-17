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
            <div className="gap-0 lg:gap-20 flex flex-col md:flex-row mx-auto max-w-[80rem]">
                {/* TEXT SIDE */}
                <div className="space-y-10 w-full md:w-1/2">
                    <h1 className="text-[30px] md:text-[56px] font-bold leading-tight">
                        Complete Financial Operations
                    </h1>
                    <p className="text-[16px] md:text-[21px]">
                        Suite for Modern Businesses, From sleek invoice creation to global payment integration
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
                <div className="flex flex-col-reverse md:flex-row gap-6 w-full md:w-1/2 relative mt-16 md:mt-0">
                    {/* Top Left Dash - only on desktop */}
                    <div className="md:flex flex-col gap-5 items-end justify-end w-full hidden">
                        <div className="-mr-10 z-10">
                            <Image
                                src="/dash-3.svg"
                                alt="dash overlay"
                                width={500}
                                height={200}
                                className="rounded-xl w-full h-[7rem] shadow-2xl max-w-[20rem]"
                            />
                        </div>
                        <div className="w-full h-auto">
                            <Image
                                src="/dash-2.svg"
                                alt="dash"
                                width={700}
                                height={200}
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Biller and bottom dash - always visible */}
                    <div className="flex flex-col gap-4 items-center w-full">
                        <div className="w-full">
                            <Image
                                src="/biller-1.jpg"
                                alt="biller"
                                width={200}
                                height={400}
                                className="rounded-xl w-full h-[20rem] object-cover"
                            />
                        </div>
                        <div className="w-full">
                            <Image
                                src="/dash-3.svg"
                                alt="dash bottom"
                                width={400}
                                height={200}
                                className="rounded-xl w-full object-cover h-[7rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* === LOGO MARQUEE === */}
            <div className="overflow-hidden mx-auto max-w-[80rem]">
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
