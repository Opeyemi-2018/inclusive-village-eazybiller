"use client"
import React from 'react';
import Image from 'next/image';

const POSEChannel = () => {
    return (
        <div className="min-h-screen md:mt-44 mt-32   bg-white">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                <div
                    className="flex-1 space-y-6 px-3"
                >

                    <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
                        Empowering Payments with POS & E-Channel Solutions
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Inclusive Village offers secure, scalable, and efficient POS and E-Channel infrastructure that powers merchants, agents, and financial institutions across Africa. We deliver the technology that connects your business to your customers—anytime, anywhere.
                    </p>
                    <button className="bg-[#084972] text-white px-6 py-3 rounded text-lg font-medium">
                        Get Started Today
                    </button>
                </div>

                <div
                    className="flex-1"
                >
                    <Image
                        src="/images/pos.jpg" // Replace with actual POS image path
                        alt="POS device"
                        width={500}
                        height={400}
                        className="md:rounded-xl shadow-md"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className='bg-gray-50 md:p-20 px-3 py-10'>
                <div className="max-w-6xl mx-auto ">
                    <h2 className="text-3xl font-bold  text-gray-900 mb-14">Core Features</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-6  shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-black mb-3">Smart POS Terminals</h3>
                            <p className="text-gray-700 ">
                                Deploy modern Android-based terminals that support card, USSD, and QR transactions with real-time reporting and analytics.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-black mb-3">Omnichannel Experience</h3>
                            <p className="text-gray-700 ">
                                Seamless integration across POS, web, and mobile channels to deliver consistent user experiences and optimize payment flow.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-black mb-3">Agent & Merchant Network</h3>
                            <p className="text-gray-700 ">
                                Build and manage a network of agents and merchants with advanced dashboards, real-time commissions, and KYC management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images Section */}
            <section className="max-w-6xl mx-auto mt-24">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/images/pos-2.jpg" // POS terminal image
                            alt="POS Terminal"
                            width={300}
                            height={250}
                            className="rounded-lg mb-4"
                        />
                        <h4 className="font-bold text-lg text-gray-800">POS Terminal</h4>
                        <p className="text-sm text-gray-600">
                            Accept payments using debit cards, QR codes, and contactless technology on the go.
                        </p>
                    </div>

                    <div className="flex flex-col items-center px-3 text-center">
                        <Image
                            src="/images/e-channel.jpg" // E-Channel image
                            alt="E-Channel"
                            width={300}
                            height={250}
                            className="rounded-lg mb-4"
                        />
                        <h4 className="font-bold text-lg text-gray-800">E-Channel Solutions</h4>
                        <p className="text-sm text-gray-600">
                            Access NIBSS Instant Payment, USSD integration, Internet Banking, and more with our E-Channel infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/images/iv-logo-no-bg.png" // Your logo
                            alt="Inclusive Village Logo"
                            width={200}
                            height={200}
                            className="mb-4"
                        />
                        <h4 className="font-bold text-lg text-gray-800">Inclusive Village</h4>
                        <p className="text-sm text-gray-600">
                            Trusted by institutions and SMEs to deliver digital payment infrastructure that scales.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative my-32 text-center text-white mx-auto max-w-6xl rounded-lg overflow-hidden">
                {/* Background image */}
                <Image
                    src="/images/payment.jpg"
                    alt="Payment background"
                    fill
                    className="object-cover z-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#084972]/90 z-10"></div>

                {/* Foreground content */}
                <div className="relative z-20 py-16 px-6">
                    <h3 className="text-3xl font-bold mb-4">Ready to digitize your payment flow?</h3>
                    <p className="mb-6 text-lg text-gray-300">
                        Join hundreds of businesses using Inclusive Village POS and E-Channel to collect, manage, and grow their revenue.
                    </p>
                    <button className="bg-white text-[#1c1a1e] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
                        Request a Demo
                    </button>
                </div>
            </section>
        </div>
    );
};

export default POSEChannel;
