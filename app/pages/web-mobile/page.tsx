"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


const AppCloud = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  const cards = [
    {
      image: "/images/app-dev.jpg",
      title: "Cross-Platform App Development",
      short: "Native performance meets modern design. We build iOS, Android, and web apps that are fast, reliable, and beautifully responsive.",
      full: "Native performance meets modern design. We build iOS, Android, and web apps that are fast, reliable, and beautifully responsive. Our team uses frameworks like React Native, Swift, and Flutter to ensure optimal user experience. These apps are designed for scalability and support real-time updates, offline-first capabilities, and seamless cloud integration across devices.",
    },
    {
      image: "/images/infra.jpg",
      title: "Cloud Infrastructure & DevOps",
      short: "Deploy globally. We set up scalable cloud systems with CI/CD pipelines, load balancers, and real-time monitoring — all on AWS, Azure, or GCP.",
      full: "Deploy globally. We set up scalable cloud systems with CI/CD pipelines, load balancers, and real-time monitoring — all on AWS, Azure, or GCP. We use containerization tools like Docker and Kubernetes, infrastructure-as-code (IaC), and automated testing. Our DevOps pipelines ensure seamless updates, reduced downtime, and continuous delivery that supports rapid innovation.",
    },
    {
      image: "/images/security.jpg",
      title: "Security & Compliance",
      short: "Built with privacy and protection in mind. From end-to-end encryption to SOC 2 & GDPR standards — your users and data are always secure.",
      full: "Built with privacy and protection in mind. From end-to-end encryption to SOC 2 & GDPR standards — your users and data are always secure. We implement SSO, multi-factor authentication, API rate limiting, and real-time threat monitoring. We also assist in compliance documentation, regular security audits, and vulnerability patching to help businesses meet international standards.",
    },
    {
      image: "/images/optimization.jpg",
      title: "Ongoing Support & Optimization",
      short: "We don’t just ship code — we stay with you post-launch. Get updates, analytics, performance tuning, and expert support anytime.",
      full: "We don’t just ship code — we stay with you post-launch. Get updates, analytics, performance tuning, and expert support anytime. Our services include crash reporting, user feedback loops, A/B testing, SEO optimization, and app store performance tracking. We ensure your digital experience evolves with your users' needs.",
    },
  ];

  return (
    <div className="min-h-screen md:pt-40 pt-28 bg-white  text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 px-3"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Brilliant Apps. Scale With The Cloud.
          </h1>
          <p className="text-lg text-gray-600">
            Whether you&apos;re launching a new mobile product or modernizing your legacy systems,
            our app & cloud solutions give you the speed, security, and scalability to stay ahead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/cloud.jpg"
            alt="App and Cloud Illustration"
            width={600}
            height={400}
            className=" shadow-lg"
          />
        </motion.div>
      </section>

      <section className="pt-36 max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow hover:shadow-md border"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={800}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-gray-600">
                  {expanded[index] ? card.full : card.short}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-black hover:underline font-semibold"
                >
                  {expanded[index] ? "Show Less" : "Show More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Call to Action */}
      <section className="relative mt-24 text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/code.jpg"
          alt="Code background"
          fill
          className="object-cover z-0"
        />

        {/* Overlay for color tint */}
        <div className="absolute inset-0 bg-[#084972]/90 z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 py-16 px-6 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Let’s Build What’s Next — Together.
          </h3>
          <p className="max-w-2xl mx-auto text-white/90">
            Whether it’s an enterprise app, a startup MVP, or infrastructure for millions of users — we’re your engineering partner.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Request a Demo
          </button>
        </div>
      </section>

    </div>
  );
};

export default AppCloud;
