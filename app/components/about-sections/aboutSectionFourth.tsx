"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSectionFourth = () => {
    return (
        <div className="bg-[#1c1a1e] md:py-20 py-16 md:px-6 px-3 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex-1 space-y-5"
                >
                    <h1 className="text-white md:text-5xl text-3xl font-bold">
                        Driving Digital Excellence Together.
                    </h1>
                    <p className="text-gray-500 font-semibold">
                        We are a team of forward-thinking engineers, strategists, and creatives passionate about transforming ideas into impactful digital solutions. Every line of code and design decision is made with purpose — to help your business grow and evolve.
                    </p>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex-1 flex justify-center"
                >
                    <Image
                        src="/images/about-image.jpg"
                        alt="about"
                        width={500}
                        height={500}
                        className="rounded-xl object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSectionFourth;
