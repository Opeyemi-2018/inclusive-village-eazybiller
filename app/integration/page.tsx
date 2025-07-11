'use client';

import { useState } from 'react';
import { FaStripeS } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const integrations = [
    {
        title: 'Stripe',
        description: 'Stripe is the best tool for smooth and seamless integration',
        icon: <FaStripeS size={30} />,
    },
    {
        title: 'PayPal',
        description: 'PayPal helps you receive and manage global payments easily',
        icon: <FaStripeS size={30} />,
    },
    {
        title: 'QuickBooks',
        description: 'Track expenses and manage accounting seamlessly',
        icon: <FaStripeS size={30} />,
    },
    {
        title: 'Xero',
        description: 'Cloud-based accounting made easy and efficient',
        icon: <FaStripeS size={30} />,
    },
    {
        title: 'Slack',
        description: 'Collaborate with teams directly from your dashboard',
        icon: <FaStripeS size={30} />,
    },
    {
        title: 'Zapier',
        description: 'Automate your workflow and integrate with 1000+ tools',
        icon: <FaStripeS size={30} />,
    }
];

const Integration = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? integrations : integrations.slice(0, 3);

    return (
        <section className="p-32 px-3 md:px-5">
            <div className="max-w-[60rem] mx-auto pt-16 space-y-5 flex lg:items-center flex-col lg:text-center">
                <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                    Integration
                </span>
                <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
                    Connecting your favorite tool effortlessly
                </h1>
                <p className="text-[18px] md:text-[20px] text-gray-500">
                    Choose a plan that perfectly fits your unique goals and budget. Get powerful financial tools without any hidden fees or surprises.
                </p>
            </div>

            <div className=" pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleItems.map((item, index) => (
                        <div key={index} className="relative bg-gray-50 space-y-6 p-6 rounded-2xl">
                            <span className="bg-white p-6 rounded-md inline-block">
                                {item.icon}
                            </span>
                            <div>
                                <h1 className="text-[22px] font-semibold">{item.title}</h1>
                                <p className="text-[20px] text-gray-700">{item.description}</p>
                            </div>
                            <button className="flex items-center gap-2 ">
                                <span className='border-b-2 border-black w-fit'>Learn more</span>
                                <span className="bg-orange-200 p-1 rounded-full inline-block">
                                    <MdArrowOutward size={15} />
                                </span>
                            </button>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="text-center pt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-orange-600 text-white px-6 py-3 rounded-full text-[18px]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Integration;
