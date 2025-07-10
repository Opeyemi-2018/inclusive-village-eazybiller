'use client'
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "1. How does your financial tool help manage my money?",
        answer: "Finora is a powerful financial management platform designed to help you track expenses, budget smarter, and grow your wealth effortlessly."
    },
    {
        question: "2. Do I need any financial knowledge to use this?",
        answer: "No, Finora is designed to be user-friendly for everyone regardless of their financial background. We provide intuitive tools and guidance to help you manage your finances with ease."
    },
    {
        question: "3. Is there a free trial option available for users?",
        answer: "Yes, we offer a 30-day free trial for all new users to explore our platform's features with no commitment required."
    },
    {
        question: "4. What payment methods do you accept currently?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for your convenience."
    },
    {
        question: "5. Can I cancel my plan anytime?",
        answer: "Absolutely! You can cancel your subscription at any time with no hidden fees or penalties. Your access will continue until the end of your current billing period."
    }
];

const HomeSectionNine = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-32 px-3 md:px-5 bg-[#faf7f2]">
            <div className="max-w-[47rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center">
                <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                    FAQ
                </span>
                <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
                    We&apos;re here to answer all your questions
                </h1>
            </div>

            <div className="max-w-3xl mx-auto pt-12">
                {/* <div className="flex space-x-4 mb-8">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium">General</button>
                    <button className="px-4 py-2 text-gray-600 rounded-md font-medium hover:bg-gray-100">For Clients</button>
                    <button className="px-4 py-2 text-gray-600 rounded-md font-medium hover:bg-gray-100">Businesses</button>
                </div> */}

                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-b-gray-300">
                            <button
                                className="w-full cursor-pointer py-6 text-left flex justify-between items-center "
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-[22px]">{faq.question}</span>
                                <span className=" text-[30px]">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="px-6 text-[20px] text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center pt-14 text-[20px]">
                    If you can&apos;t find what you&apos;re looking for, feel free to  Contact us  directly,
                </div>
            </div>
        </section>
    );
};

export default HomeSectionNine;