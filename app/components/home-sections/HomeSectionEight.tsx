'use client'
import Image from "next/image";
import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const testimonials = [
    {
        quote:
            "Finora simplifies financial planning effortlessly! With AI budgeting, I save 20% more monthly, and the expense tracking keeps my spending in check effectively.",
        name: "Rayan Kay",
        role: "Photographer",
        company: "Fintech",
        image: "/team.png",
    },
    {
        quote:
            "Using Finora has changed how I manage money. I'm now much more aware of my spending, and it’s helped me reach savings goals faster.",
        name: "Ada Obi",
        role: "Product Designer",
        company: "Fintech",
        image: "/team.png",
    },
    {
        quote:
            "Smart budgeting and automation made easy! I recommend Finora to anyone who wants to track expenses with zero stress.",
        name: "James Olu",
        role: "Developer",
        company: "Fintech",
        image: "/team.png",
    },
];

const HomeSectionEight = () => {
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const next = () =>
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <section className="py-32 px-3 md:px-5">
            <div className="max-w-[47rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center">
                <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                    Testimonial
                </span>
                <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
                    What are people saying about us right now ?
                </h1>
            </div>

            {/* MOBILE VIEW: Show all stacked */}
            <div className="flex flex-col gap-12 items-center mt-16 md:hidden">
                {testimonials.map((t, i) => (
                    <div key={i} className="text-center max-w-3xl px-6">
                        <BiSolidQuoteAltRight className="text-[6rem] text-gray-800 mb-6 mx-auto" />
                        <p className="text-[20px] text-gray-700">{t.quote}</p>
                        <div className="mt-6 space-y-3">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={500}
                                height={500}
                                className="w-12 h-12 rounded-full mx-auto object-cover"
                            />
                            <p className="font-semibold text-green-800 text-[18px]">
                                {t.name}
                                <span className="text-gray-500 font-normal">, {t.role}</span>
                            </p>
                            <p className="text-gray-800 font-medium">{t.company}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP VIEW: Show one at a time with arrows */}
            <div className="hidden md:flex flex-col items-center text-center relative mt-24 mx-auto max-w-[80rem]">
                <BiSolidQuoteAltRight className="text-[8rem] text-gray-800 pb-8" />
                <p className="text-[22px] text-gray-700 max-w-3xl">
                    {testimonials[index].quote}
                </p>

                <div className="mt-8 space-y-3">
                    <Image
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        width={500}
                        height={500}
                        className="w-12 h-12 rounded-full mx-auto object-cover"
                    />
                    <p className="font-semibold text-green-800 text-[19px]">
                        {testimonials[index].name}
                        <span className="text-gray-500 font-normal">
                            , {testimonials[index].role}
                        </span>
                    </p>
                    <p className="text-gray-800 font-medium">{testimonials[index].company}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-10 top-1/2 -translate-y-1/2 border border-gray-300 p-3 rounded-full"
                >
                    <SlArrowLeft />
                </button>
                <button
                    onClick={next}
                    className="absolute right-10 top-1/2 -translate-y-1/2 border border-gray-300 p-3 rounded-full"
                >
                    <SlArrowRight />
                </button>
            </div>
        </section>
    );
};

export default HomeSectionEight;
