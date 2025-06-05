"use client";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { VscDebugDisconnect } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ReactTyped } from 'react-typed';
import Link from "next/link";


const heroImage = [
    { img: "/images/banner.jpg" },
    { img: "/images/banner-2.jpg" },
    { img: "/images/banner-3.jpg" },
];

const SectionOne = () => {

    const words = [
        "Empowering Financial Innovation",
        "cutting-edge fintech solutions",
        "Custom software tailored to your business needs."
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % heroImage.length);
                setFade(true);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="dark:bg-[#141313] flex items-center ">
                {/* Left side */}
                <div className="relative flex-1 h-[650px]">
                    <div className="absolute inset-0 bg-[url('/images/net.png')] bg-cover bg-center opacity-5 dark:opacity-20 z-0"></div>

                    <div className="relative md:space-y-10 space-y-6 z-10 max-w-4xl mx-auto md:pt-40 pt-36 dark:text-white text-black md:pl-32 px-6">
                        <div className="flex items-center md:gap-6 gap-2">
                            <p className="font-semibold">Driven Innovation</p>
                            <VscDebugDisconnect />
                            <p className="font-semibold">Enhance Security</p>
                        </div>

                        <div>
                            <h1 className="text-2xl font-semibold">Welcome to Inclusive Village</h1>
                        </div>
                        <div className="h-36">
                            <p
                                className="font-bold md:text-4xl text-2xl font-geistMono capitalize"
                                style={{ lineHeight: "50px" }}
                            >
                                We specialize in
                            </p>
                            <ReactTyped className="font-bold md:text-4xl text-2xl font-geistMono capitalize"
                                strings={words}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </div>
                                                <Link href="/pages/solution#contact" scroll={true}>

                        <button className="flex items-center gap-3 bg-[#64ec9d] text-gray-800 p-4 text-[18px] font-semibold  hover:bg-gray-800 hover:text-white transition">
                            Schedule a free consultation <FiArrowUpRight />
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Right side dynamic image */}
                <div className="h-[650px] lg:flex hidden relative overflow-hidden w-[550px]">
                    <Image
                        key={heroImage[currentIndex].img}
                        src={heroImage[currentIndex].img}
                        alt="banner"
                        width={550}
                        height={900}
                        className={`object-cover h-full w-full transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-40"
                            }`}
                    />
                </div>

            </div>
            <div className="bg-[#003630] p-[17px] text-white  flex justify-between">
                <span className="flex items-center gap-3">
                    info@inclusivevillage <MdOutlineMail />
                </span>
                <span className="flex items-center gap-3">
                    09074629475 <FaPhone />
                </span>
            </div>
        </>
    );
};

export default SectionOne;
