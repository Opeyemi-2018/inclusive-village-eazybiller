"use client";
import { GiCheckMark } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const SectionFive = () => {
  return (
    <div className="relative h-fit overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/infra.jpg"
        alt="Infra background"
        fill
        className="object-cover z-0"
      />

      {/* Overlay color */}
      <div className="absolute inset-0 bg-[#1c1a1e]/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 md:p-6 p-4 md:px-6 px-3">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:gap-10 justify-between py-20 gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 space-y-4"
          >
            <h1 className="lg:text-4xl text-2xl text-white font-bold z-20">Business-Driven IT Solutions</h1>
            <p className="text-[#a0a0a0] mt-2">Aligning Technology with Your Business Goals for Maximum Impact.</p>
          </motion.div>

          {/* Middle Section */}
          <div className="flex-1">
            <h1 className="text-white text-xl font-semibold mb-4">Benefits of IT Strategy:</h1>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GiCheckMark className="text-[#ff7f50] text-xl" />
                <h1 className="text-lg font-medium text-[#a0a0a0]">IT Project Planning & Execution</h1>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark className="text-[#ff7f50] text-xl" />
                <h1 className="text-lg font-medium text-white">Agile & Scrum Consulting</h1>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark className="text-[#ff7f50] text-xl" />
                <h1 className="text-lg font-medium text-[#a0a0a0]">Budgeting & Cost Control</h1>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark className="text-[#ff7f50] text-xl" />
                <h1 className="text-lg font-medium text-white">Project Tracking & Reporting</h1>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h1 className="text-white lg:text-3xl text-2xl font-bold mb-4">
              20<span className="text-[#ff7f50]">+</span> <br /> Years of Experience.
            </h1>
            <Link href="/pages/about/#contact" scroll={true}>
              <button className="flex items-center mt-6 gap-3 bg-white text-gray-800 p-4 text-[18px] font-semibold hover:bg-gray-800 hover:text-white transition">
                Let&apos;s Talk<FiArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
