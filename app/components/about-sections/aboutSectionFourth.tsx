"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';

const AboutSectionFourth = () => {
    return (
        <div className='bg-[#1c1a1e] py-14 md:px-6 px-3  text-white'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className='flex flex-col justify-center gap-5 max-w-2xl mx-auto items-center'>
                <h1 className='text-white md:text-5xl text-3xl font-bold'>Collective of Creative Thinkers.</h1>
                <p className='text-gray-500 text-1xl md:ml-16 font-semibold'>Our team consists of talented designers, developers, and project managers who work together to ensure that your Software Application is delivered on time, within budget, and to the highest standards.</p>
            </motion.div>
            <div className='flex items-center justify-center py-10'>
                <Image src={"/images/about-image.jpg"} alt='about' width={500} height={500} />
            </div>

            <div className='max-w-4xl mx-auto space-y-3 text-gray-500 text-1xl'>
                <p>
                    For industries aiming to integrate secure and scalable payment gateways, we offer end-to-end solutions — from API integration and fraud prevention to compliance and user-friendly interfaces. 
                </p>

                <p>
                    We collaborate with banks to build innovative financial products that align with digital transformation goals. Whether it&apos;s mobile banking apps, loan automation systems, or AI-driven customer insights.
                </p>
            </div>
        </div>
    )
}

export default AboutSectionFourth