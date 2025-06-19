import Image from 'next/image';
import React from 'react';

const Client = () => {
    return (
        <div className="pt-36 min-h-screen px-3 md:px-10 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Hero Section */}
                <div
                    className="text-center space-y-4 rounded-lg p-16 text-white relative overflow-hidden"
                    style={{
                        backgroundColor: '#084972',
                        backgroundImage: "url('/images/hero-bg.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold">Our Clients</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        We’ve partnered with ambitious fintech brands to craft secure, scalable, and user-focused platforms from the ground up.
                    </p>
                    {/* Optional overlay for better contrast */}
                    <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
                </div>

                {/* Clients Showcase */}
                <div className="grid md:grid-cols-2 gap-10 items-start py-16">
                    {/* Duplo Card */}
                    <div className="border-l-8 border-[#ff7f50] p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-white flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-2">
                            <Image
                                src="/images/duplo.jpg"
                                alt="Duplo Logo"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />
                            <h2 className="text-2xl font-semibold">Duplo</h2>
                        </div>
                        <p className="text-gray-700">
                            We built Duplo’s core B2B payment infrastructure—integrating APIs, banks, wallets, and internal services—resulting in a seamless end-to-end transaction flow.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-3">
                            {[
                                'Designed and implemented secure payment routing and fund disbursement architecture',
                                'Built a custom dashboard with real-time transaction tracking',
                                'Achieved 99.9% uptime with auto-scaling infrastructure',
                                'Enabled Duplo to process millions of naira in monthly volume within the first 6 months',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span
                                        className="mt-1 block w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: '#ff7f50' }}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sayswitch Card */}
                    <div className="border-l-8 border-[#ff7f50] p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-white flex flex-col gap-6">
                        <div className="flex items-center gap-4 mb-2">
                            <Image
                                src="/images/sayswitch.jpg"
                                alt="Sayswitch Logo"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />
                            <h2 className="text-2xl font-semibold">Sayswitch</h2>
                        </div>
                        <p className="text-gray-700">
                            For Sayswitch, a rising fintech disruptor, we developed a scalable, secure payment gateway that powers real-time transfers and seamless integrations.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-3">
                            {[
                                'Built a dynamic transaction processing engine with fraud detection logic',
                                'Integrated with major Nigerian banks for smooth deposits and withdrawals',
                                'Deployed scalable APIs for merchant onboarding and transaction tracking',
                                'Enabled them to onboard over 100+ SMEs within the first quarter of launch',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span
                                        className="mt-1 block w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: '#ff7f50' }}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
