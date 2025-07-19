'use client'
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqsData: Record<string, FAQItem[]> = {
    General: [
        {
            question: "1. How does your financial tool help manage my money?",
            answer:
                "Eazy biller is a powerful financial management platform designed to help you track expenses, budget smarter, and grow your wealth effortlessly.",
        },
        {
            question: "2. Do I need any financial knowledge to use this?",
            answer:
                "No, Eazy biller is designed to be user-friendly for everyone regardless of their financial background.",
        },
    ],
    Clients: [
        {
            question: "1. How can clients track shared expenses?",
            answer:
                "Clients can tag shared expenses and split bills with ease, getting insights per person or group.",
        },
        {
            question: "2. Can I invite my accountant or advisor?",
            answer:
                "Yes! You can add collaborators and grant view-only or editing access for easier financial planning.",
        },
    ],
    Businesses: [
        {
            question: "1. Can I manage multiple team budgets?",
            answer:
                "Yes, our platform supports departmental budgets, approval flows, and tracking per business unit.",
        },
        {
            question: "2. Is there support for invoicing or payroll?",
            answer:
                "Our business tier includes tools for basic invoicing and exporting payroll reports.",
        },
    ],
};

const HomeSectionNine = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof faqsData>("General");

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCategoryChange = (category: keyof typeof faqsData) => {
        setSelectedCategory(category);
        setActiveIndex(null); // Reset open question
    };

    const categories: (keyof typeof faqsData)[] = ["General", "Clients", "Businesses"];
    const faqs = faqsData[selectedCategory];

    return (
        <section className="py-32 px-3 md:px-5 bg-[#faf7f2]">
            <div className="max-w-[47rem] mx-auto space-y-5 flex items-center flex-col text-center">
                <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                    FAQ
                </span>
                <h1 className="text-[30px] md:text-[50px] font-bold leading-tight">
                    We&apos;re here to answer all your questions
                </h1>
            </div>

            <div className="max-w-[60rem] mx-auto pt-12">
                <div className="flex flex-wrap justify-center gap-4 max-w-[30rem] mx-auto mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-3 text-[20px] font-medium rounded-full border border-orange-600
                ${selectedCategory === category ? 'bg-orange-600 text-white' : ''}
                w-[45%] md:w-auto ${category === "Businesses" ? "w-fit mx-auto md:mx-0" : ""}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category === "Clients" ? "For Clients" : category}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-b-gray-300">
                            <button
                                className="w-full cursor-pointer py-6 text-left flex justify-between items-center "
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-[22px]">{faq.question}</span>
                                <span className="text-[30px]">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className=" text-[20px] text-gray-700">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center pt-14 text-[20px]">
                    If you can&apos;t find what you&apos;re looking for, feel free to <span className="underline text-orange-600">Contact us</span> directly.
                </div>
            </div>
        </section>
    );
};

export default HomeSectionNine;
