"use client"

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";

function SectionSix() {
    const testimonials = [
        {
            image: "/images/testimonial-1.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi hic! Expedita laudantium accusantium voluptates nulla, iusto.",
            name: "John Doe"
        },
        {
            image: "/images/testimonial-2.png",
            text: "This is the second testimonial about how amazing your service is. It has helped me tremendously in my daily work and improved my productivity.",
            name: "Jane Smith"
        },
        {
            image: "/images/testimonial-3.png",
            text: "I can't believe how much value I've gotten from this product. The customer support is exceptional and the features are exactly what I needed.",
            name: "Robert Johnson"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isAutoPlaying] = useState(true);

    const intervalRef = useRef<NodeJS.Timeout | null>(null); // ✅ Fix

    const nextTestimonial = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 500);

        if (isAutoPlaying && intervalRef.current) {
            clearInterval(intervalRef.current);
            startAutoPlay();
        }
    }, [isAutoPlaying, testimonials.length]);

    const prevTestimonial = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setFade(true);
        }, 500);

        if (isAutoPlaying && intervalRef.current) {
            clearInterval(intervalRef.current);
            startAutoPlay();
        }
    };

    const startAutoPlay = useCallback(() => {
        intervalRef.current = setInterval(() => {
            nextTestimonial();
        }, 4000);
    }, [nextTestimonial]);

    useEffect(() => {
        if (isAutoPlaying) {
            startAutoPlay();
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying, startAutoPlay]);

    return (
        <div className="max-w-4xl mx-auto py-16 flex items-center flex-col px-3">
            <div className="flex flex-col space-y-3 items-center mb-8">
                <h1 className="border border-gray-400 rounded-full py-2 px-4 font-semibold">Client Feedback</h1>
                <h2 className="text-2xl md:text-4xl">They Trust & Loves Us!</h2>
            </div>

            <div className="flex lg:items-center pt-6 lg:gap-0 gap-4 lg:flex-row flex-col">
                <div className="flex-1">
                    <Image
                        src={testimonials[currentIndex].image}
                        width={300}
                        height={300}
                        alt="testimonial"
                        className={`transition-opacity duration-500 lg:w-[300px] w-[800px]  ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                <div className='flex-1'>
                    <div className="border-2 border-gray-400 p-6 rounded-tl-3xl space-y-4 dark:bg-[#222222] min-h-[230px]">
                        <p className={`text-[18px] dark:text-gray-400 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {testimonials[currentIndex].text}
                        </p>
                        <div className='flex items-center justify-between'>
                            <h1 className={`text-[20px] font-semibold transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                                {testimonials[currentIndex].name}
                            </h1>
                            <BiSolidQuoteAltRight className='lg:text-4xl text-2xl dark:text-gray-500' />
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-10 pt-4'>
                        <Button
                            variant="outline"
                            className='rounded-full'
                            onClick={prevTestimonial}
                        >
                            <IoMdArrowBack />
                        </Button>
                        <Button
                            variant="outline"
                            className='rounded-full'
                            onClick={nextTestimonial}
                        >
                            <IoArrowForward />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionSix;
