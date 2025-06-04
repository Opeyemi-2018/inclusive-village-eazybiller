"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

import { FiArrowUpRight } from "react-icons/fi";
const SectionTwo = () => {
    const [count, setCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const targetCount = 250;
    const duration = 2000;
    const isCounting = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !isCounting.current) {
                    isCounting.current = true;
                    setCount(0);
                    startCounting();
                } else if (!entry.isIntersecting) {
                    isCounting.current = false;
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const startTime = Date.now();

        const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * targetCount);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(targetCount);
                isCounting.current = false;
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <>
            <div className="max-w-6xl mx-auto flex md:flex-row flex-col justify-between md:gap-6 gap-3 md:px-6 px-3 py-10">
                {/* Slide in from left */}
                <motion.div
                    ref={sectionRef}
                  initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="shadow-md flex items-center bg-[#E1EACD] dark:bg-[#222222] dark:text-white capitalize space-x-6 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <div>
                        <Image
                            src="/images/award-2.jpg"
                            width={600}
                            height={400}
                            alt="award"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-2 p-6">
                        <h1 className="md:text-3xl text-2xl">
                            {new Intl.NumberFormat().format(count)}K+
                        </h1>
                        <p>Projects Have Been Done!</p>
                    </div>
                </motion.div>

                {/* Optional: third div static (or animate as needed) */}
                <div
                    className="p-6 shadow-md dark:bg-[#222222] bg-[#F5F5F5] dark:text-white capitalize space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <div className="flex justify-end">
                        <HiOutlineLightBulb className="md:text-6xl text-2xl" />
                    </div>
                    <h1 className="md:text-3xl text-2xl">cost efficiency</h1>
                    <p>
                        Flexible engagement models reduce overhead costs of
                        maintaining a full-time IT staff.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 shadow-md dark:bg-[#222222] bg-[#F1E7E7] dark:text-white capitalize space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="flex justify-end">
                        <HiOutlineLightBulb className="md:text-6xl text-2xl" />
                    </div>
                    <h1 className="md:text-3xl text-2xl">cost efficiency</h1>
                    <p>
                        Flexible engagement models reduce overhead costs of
                        maintaining a full-time IT staff.
                    </p>
                </motion.div>
            </div>
            <div className="lg:max-w-3xl  mx-auto px-3">
                <div className=" my-10 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-3 capitalize bg-gray-200  dark:text-white dark:bg-[#222222] md:rounded-full rounded-md px-6 py-3">
                    <p className="">To Make Sure to Best Service Provide Our Clients.</p>
                    <button className="rounded-full dark:bg-white dark:text-black text-white  bg-[#222222]  py-2 px-3 flex items-center gap-3">meet our expert <FiArrowUpRight /></button>
                </div>
            </div>
        </>
    );
};

export default SectionTwo;
