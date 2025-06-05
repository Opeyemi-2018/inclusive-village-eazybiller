"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Image from "next/image";
const SolutionSectionOne = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <div className='md:pt-36 pt-24' >
            <div
                ref={ref}
                className="px-3 max-w-6xl mx-auto pt-5 pb-10 overflow-hidden"
            >
                <div className="bg-green-900 bg-blend-multiply bg-cover p-16 bg-center mt-10 " style={{
                    backgroundImage: `url(/images/service-4.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                  
                    <motion.p
                        initial={{ x: "100%", opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="md:text-2xl text-[19px] text-white"
                    >
                        At our core, we are driven by a passion for delivering impactful technology solutions that solve real-world problems across industries.
                        Through our Software Solutions & Development services, we design and build custom applications that are scalable, intuitive, and aligned with your business goals.
                    </motion.p>
                </div>

                <div className="p-6">
                    <div className="p-6">
                        <div className="border-l-4 border-green-800 pl-4">
                            <div className="relative mt-10">
                                <div className="absolute w-4 h-4 bg-green-800 rounded-full -left-6 top-0"></div>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="text-2xl font-bold mb-2"
                                >
                                    Software Solutions & Development
                                </motion.p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We design and build scalable software tailored to your business goals.
                                    From web and mobile applications to enterprise systems, our development
                                    process emphasizes clean architecture, performance, and seamless user experiences.
                                    We collaborate closely to turn your ideas into reliable, maintainable digital products.
                                </p>
                            </div>

                            <div className="relative mt-10">
                                <div className="absolute w-4 h-4 bg-green-800 rounded-full -left-6 top-0"></div>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="text-2xl font-bold mb-2"
                                >
                                    IT Infrastructure & Integration

                                </motion.p>
                                <p className="text-gray-700 dark:text-gray-300">

                                    Our team ensures your technology foundation is robust and future-ready.
                                    We set up secure servers, manage cloud environments, and integrate systems for smooth operations.
                                    Whether you&apos;re migrating to the cloud or connecting legacy tools with modern platforms,
                                    we help you optimize efficiency and reduce downtime.
                                </p>
                            </div>

                            <div className="relative mt-10">
                                <div className="absolute w-4 h-4 bg-green-800 rounded-full -left-6 top-0"></div>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="text-2xl font-bold mb-2"
                                >
                                    Financial Technology (FinTech) Solutions

                                </motion.p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We empower financial institutions and startups with secure,
                                    compliant, and user-centric fintech applications. From digital wallets
                                    and payment gateways to core banking solutions, we develop tools that enhance financial access,
                                    streamline operations, and support innovation in the financial ecosystem.
                                </p>
                            </div>
                            <div className="relative mt-10">
                                <div className="absolute w-4 h-4 bg-green-800 rounded-full -left-6 top-0"></div>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="text-2xl font-bold mb-2"
                                >
                                    Cybersecurity Services

                                </motion.p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We protect your digital assets with end-to-end security strategies.
                                    Our services include threat detection, vulnerability assessments,
                                    data encryption, and compliance support. By embedding security from the ground up,
                                    we help businesses stay ahead of cyber threats while building trust with their users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionSectionOne