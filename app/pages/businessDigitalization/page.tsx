"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopHouse, FaGlobeAfrica } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import Image from "next/image";


const Business = () => {
  return (
    <div className="md:mt-44 mt-32 min-h-screen  bg-white text-gray-800 ">

      <section className="text-center max-w-4xl mx-auto space-y-6 px-3">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-bold"
        >
          Transforming Your Operations for the Digital Age
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >

          In today’s fast-changing world, digitalization is essential for growth. At Inclusive Village,
          we help businesses streamline operations, boost efficiency, and embrace digital transformation with confidence.
        </motion.p>

      </section>

      <section className="relative mt-20 text-white py-20 px-3 overflow-hidden">
        <Image
          src="/images/digital.jpg"
          alt="Digital Transformation"
          fill
          className="object-cover z-0"
        />

        {/* Overlay Color */}
        <div className="absolute inset-0 bg-[#00304e] bg-opacity-80 "></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-semibold text-center">Our Approach to Business Digitalization?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4 text-center">
              <FaLaptopHouse className="text-4xl text-[#ff7f50] mx-auto" />
              <h4 className="font-bold text-lg">Discovery & Strategy</h4>
              <p className="text-white/90 text-sm">
                We begin by thoroughly assessing your operations to identify inefficiencies and opportunities. Then, we create a tailored digital roadmap aligned with your goals.              </p>
            </div>
            <div className="space-y-4 text-center">
              <FaGlobeAfrica className="text-4xl text-[#ff7f50] mx-auto" />
              <h4 className="font-bold text-lg">Implementation & Enablement</h4>
              <p className="text-white/90 text-sm">
                We help you choose and integrate the right technologies—from CRM to AI tools—while supporting your team with hands-on training and change management.              </p>
            </div>
            <div className="space-y-4 text-center">
              <IoMdRocket className="text-4xl text-[#ff7f50] mx-auto" />
              <h4 className="font-bold text-lg">Optimization & Growth</h4>
              <p className="text-white/90 text-sm">
                After deployment, we monitor performance, gather insights, and continuously refine processes to ensure long-term success and efficiency.              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-20 py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/iv-logo-no-bg.png"
              alt="Inclusive Village Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl font-semibold text-center text-[#084972] mb-12">
            Key Benefits of Digital Transformation
          </h2>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Boost Efficiency",
                desc: "Automate tasks and streamline operations to increase productivity.",
                icon: <FaLaptopHouse size={32} className="text-[#084972]" />,
              },
              {
                title: "Enhance Customer Experience",
                desc: "Deliver seamless, personalized support across all channels.",
                icon: <FaGlobeAfrica size={32} className="text-[#ff7f50]" />,
              },
              {
                title: "Smarter Decisions",
                desc: "Use real-time data and insights to guide business strategies.",
                icon: <IoMdRocket size={32} className="text-[#084972]" />,
              },
              {
                title: "Lower Costs",
                desc: "Reduce manual work, cut errors, and optimize spending.",
                icon: <FaLaptopHouse size={32} className="text-[#ff7f50]" />,
              },
              {
                title: "Agility & Scalability",
                desc: "Quickly adapt to changes and grow your operations seamlessly.",
                icon: <FaGlobeAfrica size={32} className="text-[#084972]" />,
              },
              {
                title: "Competitive Edge",
                desc: "Stay ahead of the curve with innovation and tech adoption.",
                icon: <IoMdRocket size={32} className="text-[#ff7f50]" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md space-y-4 text-center"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-lg text-[#084972]">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
};

export default Business;
