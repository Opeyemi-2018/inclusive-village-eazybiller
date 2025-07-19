"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaPlayCircle } from "react-icons/lia";
import gsap from "gsap";

const HomeSectionOne = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const textSectionRef = useRef<HTMLDivElement>(null);
    const imageSectionRef = useRef<HTMLDivElement>(null);

    const clientLogos = Array(10).fill("/sayswitch-no-bg.png");
    const logos = [...clientLogos, ...clientLogos];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;
            if (marquee) {
                gsap.to(marquee, {
                    x: "-50%",
                    duration: 40,
                    ease: "linear",
                    repeat: -1,
                });
            }

            const textElements = textSectionRef.current?.children;
            const imageBiller = ".image-animation-item-biller";
            const dash2 = ".image-animation-item-dash-2";
            const dash3Top = ".image-animation-item-dash-3-top";
            const dash3Bottom = ".image-animation-item-dash-3-bottom";

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (textElements) {
                tl.from(textElements, {
                    y: 60,
                    autoAlpha: 0,
                    stagger: 0.15,
                    duration: 0.8,
                }, "start");
            }

            tl.from(imageBiller, {
                x: 80,
                autoAlpha: 0,
                duration: 1,
            }, "start+=0.3");

            tl.from(dash2, {
                y: 60,
                autoAlpha: 0,
                duration: 1,
            }, "start+=0.6");

            tl.from(dash3Top, {
                x: -60,
                autoAlpha: 0,
                duration: 1,
            }, "start+=0.9");

            tl.from(dash3Bottom, {
                y: 60,
                autoAlpha: 0,
                duration: 1,
            }, "start+=1.1");

        }, [textSectionRef, marqueeRef, imageSectionRef]);

        return () => ctx.revert();
    }, []);

    return (
        <div className="px-3 md:px-5 pt-32 lg:pt-56 pb-20 space-y-20 bg-[#faf7f2]">
            <div className="container mx-auto max-w-[80rem] flex flex-col lg:flex-row gap-10  xl:gap-16 items-center">
                <div ref={textSectionRef} className="lg:flex-1 space-y-8 lg:space-y-9 flex-1">
                    <h1 className="text-[35px] xl:text-[60px] lg:text-[45px]   capitalize font-bold leading-tight">
                        Complete Financial Operations Suite for Modern Businesses
                    </h1>
                    <p className="text-[19px] md:text-[22px] leading-tight">
                        Suite for Modern Businesses, From sleek invoice creation to global payment integration.
                    </p>
                    <div className="flex lg:flex-row flex-col gap-6 md:gap-6 font-semibold ">
                        <button className="rounded-full w-[70%] lg:w-fit px-[40px] py-[16px] border border-orange-600 text-[#0b0b0b] text-base md:text-[18px] flex items-center justify-between gap-2">
                            <LiaPlayCircle size={25} className="text-black" />
                            View Demo
                        </button>

                        <button className="rounded-full w-[70%] lg:w-fit pl-6 pr-3 py-[12px] bg-orange-600 text-[#0b0b0b] text-base md:text-[18px] flex items-center justify-between gap-3">
                            Try for free
                            <span className="bg-white p-2 rounded-full">
                                <IoIosArrowRoundForward size={25} className="text-black" />
                            </span>
                        </button>
                    </div>

                </div>

                <div ref={imageSectionRef} className="lg:flex-1 w-full flex-1">
                    <div className="flex flex-col-reverse lg:flex-row gap-6 w-full relative">
                        <div className="lg:flex flex-col gap-5 items-end justify-end w-full hidden">
                            <div className="lg:-mr-10 xl:-mr-16 z-10">
                                <Image
                                    src="/dash-3.svg"
                                    alt="dash overlay"
                                    width={500}
                                    height={200}
                                    className="rounded-xl w-full h-[7rem] shadow-2xl max-w-[20rem] image-animation-item-dash-3-top"
                                />
                            </div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/dash-2.svg"
                                    alt="dash"
                                    width={700}
                                    height={200}
                                    className="rounded-xl shadow-2xl image-animation-item-dash-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center w-full">
                            <div className="w-full">
                                <Image
                                    src="/biller-1.jpg"
                                    alt="biller"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full lg:h-[18rem] h-[25rem] object-cover image-animation-item-biller"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/dash-3.svg"
                                    alt="dash bottom"
                                    width={400}
                                    height={200}
                                    className="rounded-xl w-full object-cover h-[20rem] lg:h-[7rem] shadow-2xl image-animation-item-dash-3-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-16 mx-auto overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="whitespace-nowrap flex items-center gap-10 md:gap-20 w-max"
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-gray-400 font-bold text-lg">Sayswitch</span>
                            <div className="w-8 h-8 md:w-10 md:h-10">
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