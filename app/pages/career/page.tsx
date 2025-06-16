"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const Career = () => {
    return (
        <div className='md:pt-40 pt-28 min-h-screen'>
            {/* section one start */}
            <div className='px-3 max-w-6xl mx-auto'>
                <div className='flex md:items-center md:flex-row flex-col justify-between md:gap-6 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }} className='md:space-y-7 space-y-5'>
                        <h1 className='md:text-2xl text-1xl font-semibold'>Careers at Inclusive Village</h1>
                        <h2 className='md:text-5xl text-2xl font-bold'>Join our crew and build the future</h2>

                    </motion.div>

                    <div>
                        <Image src="/images/career.avif" alt="about hero" width={400} height={400} />
                    </div>
                </div>
            </div>
            {/* section one end */}

            {/* section two start */}
            <div className='bg-[#EAEFEF] py-10'>
                <div className='max-w-6xl text-black mx-auto px-3 py-20 flex md:items-center md:flex-row flex-col gap-8'>
                    <div className='flex-1 space-y-4'>
                        <h1 className='text-2xl font-semibold'>Core values</h1>
                        <h2 className='font-bold md:text-3xl text-2xl'>At Inclusive Village, we’re all about HYPE</h2>
                        <p className='text-1xl'>At Inclusive Vilage, we know the value of hard work and put our best into everything we do. But also we don’t let our work get in the way of relationships with ourselves or our customers.</p>
                        <Image src="/images/team-hangout.webp" alt="about hero" width={600} height={600} />
                    </div>

                    <div>
                        <div className='flex-1 space-y-2 mb-3'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-white inline-block'>H</h1>
                            <h2 className='font-bold text-2xl'>Honest and Open</h2>
                            <p>We’re candid about our product, our feedback, and ourselves.</p>
                        </div>
                        <div className='flex-1 space-y-2 mb-3'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-white inline-block'>Y</h1>
                            <h2 className='font-bold text-2xl'>Your Input Matters</h2>
                            <p>We’re better together; our differences are strengths.</p>
                        </div>
                        <div className='flex-1 space-y-2'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-white inline-block'>P</h1>
                            <h2 className='font-bold text-2xl'>Passion for Progress</h2>
                            <p>We push boundaries to make incremental improvements daily.</p>
                        </div>
                        <div className='flex-1 space-y-2'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-white inline-block'>E</h1>
                            <h2 className='font-bold text-2xl'>Expect Excellence</h2>
                            <p>We expect the highest quality work from ourselves and others.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* section two end */}

            {/* section third start */}
            <div className='px-3 py-10 max-w-6xl mx-auto'>
                <div className='flex items-center md:flex-row flex-col justify-between md:gap-6 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }} className=''>
                        <h1 className='text-2xl  font-semibold text-gray-700'>Perks and Benefits</h1>
                        <h2 className='text-[20px] font-bold'>Join a global team</h2>
                        <p></p>

                    </motion.div>

                    <div>
                        <Image src="/images/team-hangout.webp" alt="about hero" width={600} height={600} />
                    </div>
                </div>

                <div className='grid grid-cols-3 md:gap-10 gap-4 pt-20'>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical, dental, and vision</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>A focus on mental health</p>
                        <p>with benefits like company-sponsored Headspace subscriptions</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical and dental</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical and dental</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical and dental</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical and dental</p>
                    </div>
                </div>

            </div>
            {/* section third end */}
        </div>
    )
}

export default Career