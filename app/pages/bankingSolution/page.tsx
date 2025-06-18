"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRegChartBar, FaUniversity } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';
import { FiArrowUpRight } from 'react-icons/fi';

const solutions = [
    {
        id: 1,
        icon: <FaUniversity className="text-white text-2xl" />,
        title: 'Digital Core Banking',
        description:
            'We help modern banks digitize their core operations, enabling real-time processing, digital onboarding, and seamless account management through powerful APIs.',
        bg: 'bg-blue-700',
    },
    {
        id: 2,
        icon: <MdOutlineSecurity className="text-white text-2xl" />,
        title: 'Regulatory Compliance',
        description:
            'Stay ahead of evolving financial regulations with built-in tools for KYC, AML monitoring, and transaction transparency.',
        bg: 'bg-green-700',
    },
    {
        id: 3,
        icon: <FaRegChartBar className="text-white text-2xl" />,
        title: 'Automated Reconciliation',
        description:
            'Eliminate errors and save hours with automated transaction matching, real-time reporting, and audit-ready reconciliation.',
        bg: 'bg-purple-700',
    },
    {
        id: 4,
        icon: <CgFileDocument className="text-white text-2xl" />,
        title: 'Custom Banking APIs',
        description:
            'Access secure APIs for creating virtual accounts, processing bulk payments, and real-time status tracking across multiple banks.',
        bg: 'bg-yellow-600',
    },
];

const Banking = () => {
    return (
        <div className="md:mt-44 mt-32 min-h-screen text-gray-800 bg-white px-4 md:px-10">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10">
                    {/* Text content */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Seamless Banking Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
                        >
                            From virtual accounts to compliance automation and custom APIs, we empower banks and fintechs with modern, secure, and scalable infrastructure.
                        </motion.p>
                    </div>

                    {/* Image content */}
                    <div className="flex-1">
                        <Image
                            src="/images/banking.jpg"
                            alt="Banking dashboard"
                            width={800}
                            height={400}
                            className="rounded-lg shadow"
                        />
                    </div>
                </section>


                {/* Solutions Grid */}
                <section>
                    <div className="grid md:grid-cols-2 gap-10">
                        {solutions.map(({ id, icon, title, description, bg }) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-6 shadow hover:shadow-md transition rounded-lg"
                            >
                                <div className={`w-12 h-12 flex items-center justify-center rounded ${bg} mb-4`}>
                                    {icon}
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
                                <p className="text-gray-700">{description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* CTA */}
                <section className="relative overflow-hidden mb-14">
                    {/* Background Image */}
                    <Image
                        src="/images/banking.jpg"
                        alt="Inclusive Village Background"
                        fill
                        className="object-cover z-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#00304e]/90 z-10"></div>

                    {/* Foreground Content */}
                    <div className="relative z-20 md:p-20 px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
                        <div className="space-y-5 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Transform your bank with our secure infrastructure
                            </h2>
                            <p className="text-base">
                                Join other financial institutions using our tools to stay compliant, innovate faster, and serve customers better.
                            </p>
                            <Link href="/pages/solution#contact" scroll={true}>
                                <button className="flex items-center gap-2 bg-white text-black py-3 px-6 font-semibold hover:bg-gray-300 transition">
                                    Talk to our team <FiArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Banking;
