"use client";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ReactTyped } from 'react-typed';
import Image from "next/image";

const SectionOne = () => {
    const words = [
        "Empowering Financial Innovation",
        "cutting-edge fintech solutions",
        "Custom software tailored to your business needs."
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative mt-28 py-20 flex items-center justify-center text-white text-center px-3">
                {/* Background Image */}
                <Image
                    src="/images/service-4.jpg"
                    alt="service background"
                    fill
                    className="object-cover z-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00304e]/90 " />

                {/* Content */}
                <div className="relative  max-w-4xl mx-auto space-y-6">
                
                    <h1 className="text-2xl font-semibold">Welcome to Inclusive Village</h1>

                    <div className="h-28">
                        <p className="font-bold md:text-4xl text-2xl font-geistMono capitalize" style={{ lineHeight: "50px" }}>
                            We specialize in
                        </p>
                        <ReactTyped
                            className="font-bold md:text-4xl text-2xl font-geistMono capitalize"
                            strings={words}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
            </section>

            {/* Contact Strip */}
            <div className="bg-[#00304e] p-[17px] text-white flex justify-between text-sm md:text-base">
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
