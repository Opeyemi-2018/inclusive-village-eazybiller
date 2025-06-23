"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionTwo = () => {
    return (
        <div className="bg-[#1c1a1e] py-14 md:px-6 px-3 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex-1 space-y-5"
                >
                    <h1 className="text-white md:text-5xl text-3xl font-bold">
                        Circle of Creative Professionals.
                    </h1>
                    <p className="text-gray-500 font-semibold">
                        We are committed to providing excellent customer service and will
                        work closely with you throughout the development process to ensure
                        that your Software Application meets your exact requirements.
                    </p>

                    <p className="text-gray-500 text-base">
                        We collaborate with banks to build innovative financial products that
                        align with digital transformation goals. Whether it&apos;s mobile
                        banking apps, loan automation systems, or AI-driven customer insights.
                    </p>
                </motion.div>

                {/* Right Image and Paragraph Underneath */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex-1 flex flex-col items-center space-y-6"
                >
                    <Image
                        src="/images/about-image.jpg"
                        alt="about"
                        width={500}
                        height={500}
                        className="rounded-xl object-cover"
                    />

                    <p className="text-gray-500 text-base  md:text-left max-w-md">
                        For industries aiming to integrate secure and scalable payment
                        gateways, we offer end-to-end solutions — from API integration and
                        fraud prevention to compliance and user-friendly interfaces.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionTwo;
