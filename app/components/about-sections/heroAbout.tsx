"use client"
import Image from 'next/image';
import { motion } from "framer-motion";

const HeroAbout = () => {
    return (
        <div className='md:pt-40 pt-28 min-h-screen'>
            {/* First section */}
            <div className='px-3 max-w-6xl mx-auto'>
                <div className='flex items-center md:flex-row flex-col justify-between md:gap-6 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }} className='md:space-y-7 space-y-5'>
                        <h1 className='md:text-2xl text-1xl font-semibold'>Careers at Inclusive Village</h1>
                        <h2 className='md:text-5xl text-2xl font-bold'>Driving financial innovation for modern businesses</h2>
                        <p className='text-1xl'>
                            Inclusive empowers businesses with cutting-edge fintech solutions, from seamless payment gateways to financial automation tools, helping them scale efficiently in today&apos;s fast-paced digital economy.
                        </p>
                    </motion.div>

                    <div>
                        <Image src="/images/fintech-1.webp" alt="about hero" width={700} height={700} />
                    </div>
                </div>
            </div>

            {/* Second section */}
            <div className='flex items-stretch md:pt-32 pt-28 md:flex-row flex-col'>
                <div className='order-2 md:order-1'>
                    <Image src="/images/fintech-2.avif" alt="about mission" width={700} height={700} />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }} className='md:space-y-7 space-y-5 bg-black dark:bg-white p-10 text-white dark:text-black order-1 md:order-2'>
                    <h1 className='md:text-2xl text-1xl font-semibold'>Our Mission</h1>
                    <h2 className='md:text-5xl text-2xl font-bold'>Simplifying digital finance for all</h2>
                    <p className='text-1xl'>
                        Our mission is to create a seamless financial experience for businesses by providing secure, scalable, and intelligent payment systems and APIs.
                    </p>
                    <p className='text-1xl'>
                        Whether it&apos;s setting up a custom payment gateway, automating transaction workflows, or integrating digital wallets, we deliver fintech infrastructure that makes your business future-ready.
                    </p>
                </motion.div>
            </div>

            {/* Third section */}
            <div className='bg-[#EAEFEF] text-black'>
                <div className='px-3 max-w-6xl mx-auto flex items-center gap-10 justify-between md:pt-32 pt-28 pb-10 md:flex-row flex-col'>
                    <div className=' flex-1 md:inline hidden'>
                        <h1 className='md:text-4xl font-bold text-2xl pb-4'>One platform. Infinite possibilities.</h1>
                        <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" className='rounded-full' width={300} height={300} />
                    </div>
                    <div className='md:space-y-7 space-y-5 flex-1 '>
                        <p>
                            Our experienced team of developers, product strategists, and fintech specialists work together to deliver scalable financial solutions that align with your business goals.
                        </p>
                        <p className='text-1xl'>
                            From on-demand payments and recurring billing to real-time analytics and compliance, Inclusive gives your business the tools it needs to stay competitive in a fast-evolving market.
                        </p>
                        <p className='text-1xl'>
                            We ensure top-notch security and seamless integration with banks, wallets, and other financial systems—so you can focus on growth while we handle the complexity.
                        </p>
                        <p className='text-1xl'>
                            Inclusive unifies your financial operations from payment collections and invoicing to financial reporting into one intelligent platform built for the future of fintech.
                        </p>
                    </div>
                </div>
            </div>

            {/* fouth section start  */}
            <div className='py-10 max-w-6xl px-3 mx-auto flex  md:flex-row flex-col justify-between gap-10'>
                <div >
                    <Image src="/images/bio.webp" alt="" width={400} height={400} />
                    <div className='pt-4 space-y-1'>
                        <h1 className='font-semibold'>MR SAM</h1>
                        <p>GM, Payments & Partnerships</p>
                        <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                    </div>
                </div>
                <div >
                    <Image src="/images/bio.webp" alt="" width={400} height={400} />
                    <div className='pt-4 space-y-1'>
                        <h1 className='font-semibold'>MR SAM</h1>
                        <p>GM, Payments & Partnerships</p>
                        <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                    </div>
                </div>
                <div >
                    <Image src="/images/bio.webp" alt="" width={400} height={400} />
                    <div className='pt-4 space-y-1'>
                        <h1 className='font-semibold'>MR SAM</h1>
                        <p>GM, Payments & Partnerships</p>
                        <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
            {/* fouth section end  */}
        </div>
    );
};

export default HeroAbout;
