"use client"
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { motion } from 'framer-motion';

const SectionThree = () => {
    const services = [
        {
            title: "Software Solutions & Development",
            features: [
                "Enterprise Software Development",
                "Website Design and Development",
                "Mobile App Design and Development",
                "Estate Management System"
            ],
            image: '/images/service-1.jpg',
            mask: '/images/ser-1.png',
            bgColor: 'bg-[#E1EACD]' 
        },
        {
            title: " IT Infrastructure & Integration",
            features: [
                "Cloud Services (DevOps)",
                "E-Channels Integrations",
                "Point of Sales System",
                "Data Center Networking Solutions"
            ],
            image: '/images/service-2.jpg',
            mask: '/images/ser-2.png',
            bgColor: 'bg-[#F5F5F5]' 
        },
        {
            title: "Cybersecurity Services",
            features: [
                "Security Risk Assessment",
                "Cybersecurity Strategy & Implementation",
                "Third (3rd) Party Service Integrations",
                "Data Center Networking Solutions"
            ],
            image: '/images/service-3.jpg',
            mask: '/images/ser-3.png',
            bgColor: 'bg-[#F1E7E7]' 
        },
        {
            title: "Financial Technology (FinTech) Solutions",
            features: [
                "Remittance System",
                "Payment Gateway System",
                "Banking Software Solution",
                "Third (3rd) Party Service Integrations (Cybersource, Mastercard Payment Gateway Service, Mobile Money, USSD"
            ],
            image: '/images/service-4.jpg',
            mask: '/images/ser-4.png',
            bgColor: 'bg-[#E3FEF7]' // Light teal
        },
    ];

    return (
        <div className="py-8 max-w-6xl mx-auto md:px-6 px-3">
            <div className="flex md:flex-row flex-col justify-between my-10">
                <h1 className="md:text-5xl text-2xl">We Provide Smart Solution.</h1>
                <button className="flex items-center gap-3">
                    View All Solution <FiArrowUpRight />
                </button>
            </div>

            {services.map((service, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    key={index}
                    className={` flex items-center justify-between w-full p-10 ${service.bgColor} dark:bg-[#222222] mb-6 last:mb-0`}
                >
                    <div className="space-y-4 ">
                        <h1 className="md:text-4xl text-2xl py-4">{service.title}</h1>
                        {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                                <GiCheckMark className="text-green-700 text-xl" />
                                <h1 className="text-lg font-medium">{feature}</h1>
                            </div>
                        ))}
                    </div>

                    

                    <div className="relative lg:inline hidden" style={{
                        width: '280px',
                        height: '280px',
                        flexShrink: 0
                    }}>
                        <Image
                            src={service.image}
                            fill
                            alt={service.title}
                            style={{
                                maskImage: `url(${service.mask})`,
                                maskSize: '100% 100%',
                                WebkitMaskImage: `url(${service.mask})`,
                                WebkitMaskSize: '100% 100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SectionThree;