"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SectionOne = () => {
    const words = [
        "Empowering Global Financial Innovation Everywhere",
        "Delivering Cutting-edge Fintech Solutions Seamlessly",
        "Custom Software Tailored to Your Unique Business Needs",
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true); // Start slide-out

            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false); // Start slide-in
            }, 500); // Should match transition duration
        }, 5000); // Change every 5s

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative mt-28 py-20 flex min-h-screen items-center justify-center text-white text-center px-3 overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/service-4.jpg"
                    alt="service background"
                    fill
                    className="object-cover z-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00304e]/90 z-10" />

                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto space-y-8">
                    <div className="h-28 flex items-center justify-center overflow-hidden">
                        <p
                            className={`font-bold md:text-4xl text-2xl font-geistMono capitalize transition-all duration-500 ease-in-out transform ${isAnimating
                                ? "-translate-x-full opacity-0"
                                : "translate-x-0 opacity-100"
                                }`}
                            style={{ lineHeight: "50px" }}
                        >
                            {words[currentWordIndex]}
                        </p>
                    </div>

                    {/* Dots / Indicators */}
                    <div className="flex justify-center space-x-3">
                        {words.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentWordIndex === index
                                    ? "bg-white"
                                    : "bg-white/30 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionOne;
