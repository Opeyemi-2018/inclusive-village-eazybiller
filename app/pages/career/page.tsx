"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { RiPlaneLine } from "react-icons/ri";
import { TbAlphabetBangla } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";


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
            <div className='px-3 py-16 max-w-6xl mx-auto'>
                <div className='flex items-center md:flex-row flex-col justify-between md:gap-10 gap-6'>
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

                <div className='grid md:grid-cols-3 grid-cols-1  md:gap-10 gap-6 pt-20'>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><FaPlus /></button>
                        <p className='text-[20px] font-bold'>Medical, dental, and vision</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><MdOutlineHealthAndSafety /></button>
                        <p className='text-[20px] font-bold'>A focus on mental health</p>
                        <p>with benefits like company-sponsored Headspace subscriptions</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><RiPlaneLine /></button>
                        <p className='text-[20px] font-bold'>Regular team outings, celebrations, and contests</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><TbAlphabetBangla /></button>
                        <p className='text-[20px] font-bold'>A strong, results-oriented team culture</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><MdOutlineLocationOn /></button>
                        <p className='text-[20px] font-bold'>A casual work environment with location flexibility</p>
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#1d1b1f] p-4 text-white md:text-2xl text-1xl'><IoGlobeOutline /></button>
                        <p className='text-[20px] font-bold'>Travel to visit teams across the US </p>
                    </div>
                </div>

            </div>
            {/* section third end */}



            {/* section fouth start */}
            <div className='bg-[#EAEFEF] py-20 px-3 '>
                <div className='max-w-6xl mx-auto '>
                    <h1 className='md:text-5xl text-2xl font-bold text-black'>The hiring process</h1>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 text-gray-700'>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>1</h1>
                            <h2 className='text-2xl font-semibold'>Apply Online</h2>
                            <p>Check out our open positions and apply to the role that best suits your experience and background. Our goal is to get back to you quickly. Our recruiters are hard at work, though because of the volume of applications we receive, we cannot always get back to everyone. If there is a mutual fit, you will hear from us soon.</p>
                        </div>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>2</h1>
                            <h2 className='text-2xl font-semibold'>Recruiter Screen</h2>
                            <p>Yay, the interest is mutual! One of our recruiters will reach out to you to set up an intro call. This will allow us to learn more about you, and more importantly, for you to learn more about us. The recruiter is there to be your expert and guide, so please come prepared with your questions.</p>                        </div>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>3</h1>
                            <h2 className='text-2xl font-semibold'>Hiring Manager Screen</h2>
                            <p>Once the recruiter has determined that you are a good fit for the role, they’ll set you up to speak more in depth with the hiring manager. This call will be 45-60 minutes and will dive into your background, the role and team here at Maxio, as well as any questions you might have about what success looks like at our company.</p>                        </div>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>4</h1>
                            <h2 className='text-2xl font-semibold'>Team Interview</h2>
                            <p>Depending on the role and team you are interviewing with, the “Team Interview” will take place with 2-4 individuals over the course of several days. This allows you to gain a clear understanding of what the day to day might look like in your new role, and to get a feel for the folks you’ll be working with.</p>                        </div>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>5</h1>
                            <h2 className='text-2xl font-semibold'>Follow Up</h2>
                            <p>You made it! The recruiter will reach out to chat with you about offer details (compensation, potential start date, any outlying questions and concerns). All details will be laid out precisely and clearly, so you feel equipped to make your decision.</p>                        </div>
                        <div className='pt-16 space-y-4'>
                            <h1 className='px-6 py-4 text-3xl font-bold bg-[#1d1b1f] text-white inline-block'>6</h1>
                            <h2 className='text-2xl font-semibold'>Offer</h2>
                            <p>Congratulations, we want to work together! Once we extend an offer, we request a response within 48 hours. The recruiter will be available to you to answer any questions you may have during that window.</p>                        </div>
                    </div>
                </div>
            </div>
            {/* section fouth end */}


            <div className='bg-[#ffe246] md:p-20 px-3 py-16'>
                <div className='space-y-6'>
                    <h1 className='md:text-5xl text-3xl font-bold text-black'>Ready to achieve sustainable growth in today’s market?</h1>
                    <Link href="/pages/solution#contact" scroll={true}>

                        <button className="flex items-center gap-3 bg-black text-white p-4 text-[18px] font-semibold  hover:bg-gray-800  transition">
                            Schedule a free consultation <FiArrowUpRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Career