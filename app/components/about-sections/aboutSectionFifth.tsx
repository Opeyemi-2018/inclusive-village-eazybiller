"use client"
import { motion } from "framer-motion";

const AboutSectionFifth = () => {
    return (
        <div id="contact" className="relative py-16 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/teams.jpg")',
                    top: '-50px', // Extends the image upwards
                    bottom: '-50px', // Extends the image downwards
                }}
            >
                <div className="absolute inset-0 bg-black/80 bg-opacity-20"></div>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }} className="w-full md:w-1/2 mb-8 md:mb-0 text-white">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg">
                        We&apos;d love to hear from you. Fill the form to get in touch.
                    </p>
                </motion.div>

                <div className="w-full md:w-1/2 text-gray-800">
                    <form className="space-y-6 bg-white bg-opacity-90 shadow-lg rounded-xl p-8">
                        {/* Name and Number */}
                        <div className="flex flex-col md:flex-row md:space-x-4 text-gray-800">
                            <div className="flex-1">
                                <label className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex-1 mt-4 md:mt-0">
                                <label className="block mb-2 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Your message"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#1c1a1e] text-white p-3 rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionFifth;