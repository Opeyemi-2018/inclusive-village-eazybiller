'use client';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { TbArrowCurveRight } from "react-icons/tb";

const HomeSectionSeven = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

    const pricingPlans = [
        {
            title: "Free plan",
            price: "FREE",
            monthly: "",
            annual: "",
            description: "Great for starting with essential finance tools and maximizing your potential.",
            button: "Get started",
            features: [
                "Basic expense tracking",
                "Budget planning",
                "Connect up to 2 bank",
                "Email support",
            ],
            isPopular: false,
            bgColor: "bg-white",
            buttonColor: "bg-orange-600 text-black",
        },
        {
            title: "Pro plan",
            price: billingCycle === 'monthly' ? "$200" : "$1800",
            monthly: billingCycle === 'monthly' ? "/month" : "/year",
            description: "For individuals who want smarter insights and innovative.",
            button: "Choose Plan",
            features: [
                "AI expense categorization",
                "Budget & savings goals",
                "Connect unlimited bank",
                "Real-time spending insights",
            ],
            isPopular: true,
            bgColor: "bg-orange-600",
            textColor: "text-black",
            buttonColor: "bg-white text-orange-600",
        },
        {
            title: "Business plan",
            price: billingCycle === 'monthly' ? "$400" : "$3600",
            monthly: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Designed for businesses to streamline financial management.",
            button: "Choose Plan",
            features: [
                "All Pro features Business Dashboard",
                "Invoice & billing automation",
                "Role-based multi-user access",
                "Dedicated account manager",
            ],
            isPopular: false,
            bgColor: "bg-white",
            buttonColor: "bg-orange-600 text-black",
        },
    ];

    return (
        <section className='py-32 px-3 md:px-5 bg-[#faf7f2]'>
            <div className="flex justify-between flex-col lg:flex-row gap-5 lg:gap-0 items-center max-w-[80rem] mx-auto">
                <div className='space-y-5 max-w-[40rem] flex flex-col  justify-center lg:justify-start items-center lg:items-start text-center lg:text-start'>
                    <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                        Key Features
                    </span>
                    <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Flexible pricing plans tailored to your needs</h1>
                    <p className='text-[18px] md:text-[20px] text-gray-500'>Choose a plan that perfectly fits your unique goals and budget.</p>
                </div>

                <div className='flex items-center flex-col gap-3'>
                    <p className='rotate-[-6deg] text-[18px]'>Save 25%</p>
                    <TbArrowCurveRight size={40} className="rotate-90" />
                    <div className="mt-6 lg:mt-0 flex gap-2 p-1 bg-white rounded-full shadow-md">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all font-semibold ${billingCycle === 'monthly' ? 'bg-orange-600 text-black shadow' : 'text-gray-500'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annual')}
                            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all font-semibold ${billingCycle === 'annual' ? 'bg-orange-600 text-black shadow' : 'text-gray-500'
                                }`}
                        >
                            Annual
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-[80rem] grid grid-cols-1 lg:grid-cols-3  md:gap-6 gap-8 pt-12">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`${plan.bgColor} rounded-3xl shadow-md lg:p-[40px] p-[20px] flex flex-col relative`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-xs p-3 rounded-lg font-semibold">
                                Most Popular
                            </span>
                        )}

                        <div className="space-y-3 font-semibold">
                            <h3 className={`text-[24px] ${plan.textColor}`}>{plan.title}</h3>
                            <p className={`mt-2 text-[18px] ${plan.isPopular ? "text-black" : "text-gray-700"}`}>
                                {plan.description}
                            </p>
                        </div>

                        <p className={`text-[25px] lg:text-[40px] font-bold my-7 ${plan.textColor}`}>
                            {plan.price}
                            {plan.monthly && (
                                <span className="text-[24px] font-normal"> {plan.monthly}</span>
                            )}
                        </p>

                        <button className={`${plan.buttonColor} text-[20px] my-2 rounded-full py-[15px] lg:py-[20px] px-[24px] font-semibold`}>
                            {plan.button}
                        </button>

                        <ul className={`text-left mt-6 space-y-3 text-sm ${plan.isPopular ? "text-black" : "text-gray-800"}`}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <FaCheck size={20} />
                                    <span className="text-[18px] font-semibold">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeSectionSeven;
