'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion';

const teamMembers = [
    {
        id: 1,
        name: 'Emmanue',
        role: 'Chief Technology Officer',
        image: '/images/testimonial-1.png',
        link: 'LinkedIn'
    },
    {
        id: 2,
        name: 'Sarah',
        role: 'Project Manager',
        image: '/images/team.png',
        link: 'LinkedIn'
    },
    {
        id: 3,
        name: 'Daniel',
        role: 'Lead Developer',
        image: '/images/testimonial-2.png',
        link: 'LinkedIn'
    },
    {
        id: 4,
        name: 'Jessica',
        role: 'UX Designer',
        image: '/images/testimonial-3.png',
        link: 'LinkedIn'
    },
    {
        id: 5,
        name: 'Michael',
        role: 'DevOps Engineer',
        image: '/images/testimonial-1.png',
        link: 'LinkedIn'
    },
    {
        id: 6,
        name: 'Sophia',
        role: 'Marketing Lead',
        image: '/images/testimonial-2.png',
        link: 'LinkedIn'
    },
];

const AboutSectionThree = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    const intervalRef = useRef<number | null>(null);

    const updateVisibleCount = useCallback(() => {
        if (window.innerWidth < 768) {
            setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
            setVisibleCount(2);
        } else {
            setVisibleCount(4);
        }
    }, []);

    const maxIndex = teamMembers.length - visibleCount;

    const slideNext = useCallback(() => {
        setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const slidePrev = useCallback(() => {
        setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);

        intervalRef.current = window.setInterval(slideNext, 4000);

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
            window.removeEventListener('resize', updateVisibleCount);
        };
    }, [slideNext, updateVisibleCount]);

    function handlePrev(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        slidePrev();
    }

    function handleNext(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        slideNext();
    }

    return (
        <div className='max-w-6xl mx-auto pb-8 overflow-hidden px-4'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className='lg:text-5xl text-3xl font-bold py-10 text-center'
            >
                Our Dynamic Team
            </motion.div>

            <div className='relative'>
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:text-black shadow-md rounded-full hover:bg-gray-100'
                    aria-label="Previous"
                >
                    <FaChevronLeft />
                </button>

                {/* Slider */}
                <div className='overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{
                            width: `${(teamMembers.length / visibleCount) * 100}%`,
                            transform: `translateX(-${(100 / teamMembers.length) * startIndex}%)`,
                        }}
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className='flex-shrink-0 px-4'
                                style={{ width: `${100 / teamMembers.length}%` }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className='mx-auto md:w-[250px] w-full h-[250px] object-cover rounded-md'
                                />
                                <div className='pt-4 '>
                                    <h1 className='text-2xl font-semibold'>{member.name}</h1>
                                    <p className='text-gray-500 mb-2'>{member.role}</p>
                                    <a
                                        href="#"
                                        className='text-gray-700 dark:text-gray-200 hover:underline flex items-center gap-2'
                                    >
                                        {member.link}
                                        <button className="bg-[#4D55CC] rounded-full p-2 text-white"><FaLinkedinIn /></button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:text-black shadow-md rounded-full hover:bg-gray-100'
                    aria-label="Next"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className='flex items-center justify-center'>
                <button className='flex items-center font-semibold rounded-full gap-4 border border-gray-500 px-3 py-2 my-14'>
                    <h1>Join Our Team</h1>
                    <FiArrowUpRight />
                </button>
            </div>
        </div>
    );
};

export default AboutSectionThree;
