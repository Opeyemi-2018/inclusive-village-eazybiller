'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const PortfolioSectionOne = () => {
    const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

    const toggleReadMore = (id: number) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const projects = [
        {
            id: 1,
            image: '/images/duplo.jpg',
            alt: 'duplo-logo',
            industry: 'Fintech',
            solution: 'Payment Gateway',
            clientNeeds:
                'a secure and scalable payment gateway that could simplify the way their customers make transactions.',
            ourApproach:
                'we began by conducting a discovery session to understand their business processes, user flows, and payment pain points. We then designed a user-friendly, secure, and modular payment gateway that could easily integrate with their existing systems.',
        },
        {
            id: 2,
            image: '/images/sayswitch.jpg',
            alt: 'sayswitch-logo',
            industry: 'Fintech',
            solution: 'Payment Gateway',
            clientNeeds:
                'an efficient peer-to-peer payment system that ensures seamless mobile transactions for users across different platforms.',
            ourApproach:
                'we designed a responsive mobile-first payment gateway with real-time transaction tracking and enhanced security layers. The solution was built to scale and included intuitive UI/UX tailored to users with varying levels of digital literacy.',
        },
        {
            id: 3,
            image: '/images/genesis-estate.jpg',
            alt: 'genesis-logo',
            industry: 'Real Estate',
            solution: 'Property Listing Platform',
            clientNeeds:
                'a robust digital platform to showcase property listings, manage client inquiries, and streamline the sales and rental process.',
            ourApproach:
                'we built a dynamic real estate portal with advanced search filters, interactive maps, and integrated contact forms. The platform allows property managers to list, edit, and manage properties while offering visitors a seamless browsing experience.',
        },
    ];


    return (
        <div className='md:py-36 py-24 max-w-6xl mx-auto'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }} className='max-w-[500px] space-y-3 px-3'>
                <h1 className='lg:text-5xl text-2xl font-bold'>Portfolio</h1>
                <div className='flex items-center gap-4 px-3 py-2 justify-center rounded-full border max-w-[300px] border-gray-300'>
                    some of our recent project
                </div>
            </motion.div>

            <div className=''>
                {projects.map((project) => {
                    const isExpanded = expandedProjects[project.id];
                    const shortText = project.ourApproach.slice(0, 130) + '...';

                    return (
                        <div className='item pt-10 mb-16' key={project.id}>
                            <div className='relative'>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.5 }} >

                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        width={600}
                                        height={0}
                                        className='shadow-2xl lg:rounded-md h-[300px] lg:h-[340px] w-full'
                                    />
                                </motion.div>
                                <div className='px-3'>
                                    <div className='absolute right-0 -bottom-16 flex lg:items-center lg:flex-row flex-col lg:gap-8 gap-2 bg-gray-200 dark:bg-[#222222] lg:p-10 p-6 max-w-4xl mx-auto rounded-lg'>
                                        <div className='flex items-center lg:gap-6 gap-8 font-semibold'>
                                            <h1 className='text-black dark:text-white'>Industry:</h1>
                                            <h2 className='text-gray-600 dark:text-gray-400'>{project.industry}</h2>
                                        </div>
                                        <div className='flex items-center lg:gap-6 gap-8 font-semibold'>
                                            <h1 className='text-black dark:text-white'>Solution:</h1>
                                            <h2 className='text-gray-600 dark:text-gray-400'>{project.solution}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-24 px-3'>
                                <h1 className='md:text-4xl font-bold text-2xl lg:pb-6 pb-0'>Projects Summary</h1>
                                <div className='lg:pt-10 pt-6'>
                                    <div className='flex lg:flex-row flex-col justify-between lg:gap-0 gap-4'>
                                        <div className='flex-1'>
                                            <h2 className='font-semibold text-2xl'>Client Needs:</h2>
                                            <p className='pt-5 text-gray-600 text-[18px] dark:text-gray-400'>
                                                {project.clientNeeds}
                                            </p>
                                        </div>
                                        <div className='flex-1'>
                                            <h2 className='font-semibold text-2xl'>Our Approche:</h2>
                                            <p className='pt-5 text-gray-600 dark:text-gray-400 text-[18px]'>
                                                {isExpanded ? project.ourApproach : shortText}
                                            </p>
                                            <button
                                                onClick={() => toggleReadMore(project.id)}
                                                className=' mt-2 underline text-sm'
                                            >
                                                {isExpanded ? 'Read less' : 'Read more'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PortfolioSectionOne;
