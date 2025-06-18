"use client";
import Image from "next/image";
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
        },
        {
            title: "IT Infrastructure & Integration",
            features: [
                "Cloud Services (DevOps)",
                "E-Channels Integrations",
                "Point of Sales System",
                "Data Center Networking Solutions"
            ],
            image: '/images/service-2.jpg',
            mask: '/images/ser-2.png',
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
        },
    ];

    return (
        <div className="py-8 max-w-6xl mx-auto md:px-6 px-3">
                <h1 className="md:text-5xl text-2xl text-[#00304e] my-10 dark:text-white">
                    We Provide Smart Solution.
                </h1>

            {services.map((service, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    key={index}
                    className="relative flex items-center justify-between w-full p-10 mb-6 last:mb-0 rounded-lg overflow-hidden"
                >
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/infra.jpg"
                            alt="Infra background"
                            fill
                            className="object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-[#00304e] opacity-50" />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full text-white gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <h1 className="md:text-4xl text-2xl py-4  font-semibold">
                                {service.title}
                            </h1>
                            {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                    <GiCheckMark className="text-[#ff7f50] text-xl" />
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
                    </div>
                </motion.div>

            ))}
        </div>
    );
};

export default SectionThree;
