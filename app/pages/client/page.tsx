import Image from 'next/image';
import React from 'react';

const Client = () => {
    return (
        <div className="pt-28 min-h-screen px-3 md:px-10 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Clients</h1>
                    <p className="text-lg text-gray-600">
                        We’ve partnered with ambitious fintech brands to craft secure, scalable, and user-focused platforms from the ground up.
                    </p>
                </div>

                {/* Clients Showcase */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Duplo */}
                    <div className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src="/images/duplo.jpg"
                                alt="Duplo Logo"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />
                            <h2 className="text-2xl font-semibold">Duplo</h2>
                        </div>
                        <p className="text-gray-700 mb-4">
                            We built Duplo’s core B2B payment infrastructure—integrating APIs, banks, wallets, and internal services—resulting in a seamless end-to-end transaction flow.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            <li>Designed and implemented secure payment routing and fund disbursement architecture</li>
                            <li>Built a custom dashboard with real-time transaction tracking</li>
                            <li>Achieved 99.9% uptime with auto-scaling infrastructure</li>
                            <li>Enabled Duplo to process millions of naira in monthly volume within the first 6 months</li>
                        </ul>
                    </div>

                    {/* Sayswitch */}
                    <div className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src="/images/sayswitch.jpg"
                                alt="Sayswitch Logo"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />
                            <h2 className="text-2xl font-semibold">Sayswitch</h2>
                        </div>
                        <p className="text-gray-700 mb-4">
                            For Sayswitch, a rising fintech disruptor, we developed a scalable, secure payment gateway that powers real-time transfers and seamless integrations.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            <li>Built a dynamic transaction processing engine with fraud detection logic</li>
                            <li>Integrated with major Nigerian banks for smooth deposits and withdrawals</li>
                            <li>Deployed scalable APIs for merchant onboarding and transaction tracking</li>
                            <li>Enabled them to onboard over 100+ SMEs within the first quarter of launch</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
