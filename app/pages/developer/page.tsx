import AboutSectionTwo from '@/app/components/about-sections/aboutSectionTwo'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='pt-28 min-h-screen'>
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row max-w-6xl px-3 mx-auto md:items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 space-y-5">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-400">
                        Subscription billing for developers
                    </h2>
                    <p className="md:text-5xl text-3xl font-bold text-[#1f2937] dark:text-gray-400">
                        If you can build it. <br /> We can bill it.
                    </p>
                    <p className="text-gray-600 text-[16px] dark:text-gray-400">
                        Build and scale with a billing system that grows with you. Our API-first platform lets you integrate fast, collect global payments, and manage subscriptions effortlessly.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2 dark:text-gray-400">
                        <li>Flexible subscription plans</li>
                        <li>Real-time analytics dashboard</li>
                        <li>Seamless API integration with your stack</li>
                        <li>Global currency support</li>
                    </ul>
                    <button className="mt-4 px-6 py-3 bg-[#084972] text-white font-semibold rounded-md ">
                        Get Started
                    </button>
                </div>

                {/* Image */}
                <div className="flex-1">
                    <Image
                        src="/images/dev-img.png"
                        alt="Developer Billing"
                        width={500}
                        height={500}
                        className="h-auto rounded-lg object-cover"
                    />
                </div>
            </div>

            <AboutSectionTwo />

            {/* Third Section */}
            <div className='bg-[#f1f2f2] md:py-20 py-10 md:px-16 flex flex-col lg:flex-row md:items-center gap-10 px-3'>
                {/* Text */}
                <div className='space-y-4 flex-1'>
                    <h1 className='md:text-5xl text-2xl text-[#111827] font-bold'>
                        Secure and reliable billing software
                    </h1>
                    <p className='text-gray-700'>
                        A winning combination of enterprise-grade security to protect your customers and proven reliability to keep your recurring billing running smoothly. Our infrastructure ensures 99.9% uptime, fast response times, and robust fraud prevention tools.
                    </p>
                    <p className='text-gray-700'>
                        Trusted by leading startups and enterprises, our certifications ensure your compliance with international standards.
                    </p>
                </div>

                {/* Logos */}
                <div className='flex items-center gap-6 flex-wrap  flex-1'>
                    <div className='text-center'>
                        <Image
                            src="/images/pci.webp"
                            alt="PCI Compliance"
                            width={120}
                            height={120}
                            className="h-auto object-contain"
                        />
                        <p className='text-sm text-gray-600 mt-2'>PCI DSS Compliant</p>
                    </div>
                    <div className='text-center'>
                        <Image
                            src="/images/gdpr.png"
                            alt="GDPR Compliant"
                            width={120}
                            height={120}
                            className="h-auto object-contain"
                        />
                        <p className='text-sm text-gray-600 mt-2'>GDPR Ready</p>
                    </div>
                    <div className='text-center'>
                        <Image
                            src="/images/bestResults.webp"
                            alt="Best Security"
                            width={120}
                            height={120}
                            className="h-auto object-contain"
                        />
                        <p className='text-sm text-gray-600 mt-2'>Top-tier Encryption</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
