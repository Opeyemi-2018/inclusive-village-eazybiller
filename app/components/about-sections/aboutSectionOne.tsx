"use client"
import { BsArrows } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
const AboutSectionOne = () => {

    return (
        <div className='md:pt-40 pt-36 min-h-screen px-3 max-w-6xl mx-auto'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className='flex items-center flex-col gap-6 justify-center'>
                <h1 className='text-center lg:text-5xl text-2xl font-bold max-w-[500px]'>To Make Unique
                    Depth, Bold Implact
                </h1>
                <div className="flex items-center gap-4 px-3 py-2 rounded-full border border-gray-300">
                    <p>home</p>
                    <BsArrows />
                    <p>company</p>
                </div>
            </motion.div>

            <div className="pt-16 flex lg:flex-row flex-col  justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }} className="flex-1">
                    <h1 className="lg:text-4xl text-2xl py-6">To Make Unique Depth, Bold Implact.</h1>
                    <p className="text-gray-800 text-[18px] dark:text-gray-400">“ We believe in bespoke strategies, designed specifically for your business needs.”</p>
                    <button className="flex items-center gap-3 bg-[#64ec9d] my-6 text-gray-800 p-4 text-[18px] font-semibold  hover:bg-gray-800 hover:text-white transition">
                        Schedule a free consultation <FiArrowUpRight />
                    </button>
                </motion.div>
                <div className="flex-1 text-gray-700 dark:text-gray-400 space-y-5 text-[18px]">
                    <div >Our diverse background spans Design, Marketing, and Technology, allowing us to offer full-spectrum digital services. From startups to established enterprises, we tailor solutions to fit your unique needs, <span className="text-black dark:text-white">no matter your industry or size.</span></div>
                    <p>We work closely with our clients to understand their goals, challenges, and opportunities, ensuring that every solution is custom-fit to deliver measurable results. By combining cutting-edge technology with creative innovation, we help businesses not only keep up but get ahead.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutSectionOne