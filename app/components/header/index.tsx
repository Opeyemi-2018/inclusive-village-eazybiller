'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
                setIsScrolledDown(true);
            } else {
                // Scrolling up
                setIsVisible(true);
                setIsScrolledDown(false);
            }

            if (currentScrollY < lastScrollY && currentScrollY > 50) {
                setIsVisible(true);
                setIsScrolledDown(true);
            } else if (currentScrollY <= 50) {
                setIsVisible(true);
                setIsScrolledDown(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${isScrolledDown ? 'bg-white shadow-md py-4' : 'bg-[#faf7f2] py-5'}`}
        >
            <div className="px-3 md:px-5 flex items-center justify-between">
                <Link href="/" className="font-semibold text-2xl">EAZYBILLER</Link>

                <nav className={`lg:flex items-center gap-10 text-[18px] hidden ${isScrolledDown ? "bg-transparent" : "bg-white shadow-xl"}   p-3 rounded-lg`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/">Pricing</Link>
                    <Link href="/">Contact</Link>
                </nav>

                <div className="flex items-center gap-5">
                    <button className="rounded-full px-5 py-3 bg-orange-600 text-[#0b0b0b] text-[18px] hidden md:inline"> Request Demo</button>

                    {/* Mobile Menu Toggle */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button>
                                {open ? (
                                    <LiaTimesSolid size={30} className=" lg:hidden" />
                                ) : (
                                    <FaBarsStaggered size={25} className=" lg:hidden" />
                                )}
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] p-6">
                            <SheetHeader>
                                <SheetTitle className="font-semibold text-2xl">
                                    <Link href="/">EAZYBILLER</Link>
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="flex flex-col justify-center items-center gap-6 text-[18px] mt-6">
                                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                                <Link href="/" onClick={() => setOpen(false)}>Pricing</Link>
                                <Link href="/" onClick={() => setOpen(false)}>Contact</Link>
                                <Link href="/" className="mt-4 w-full bg-orange-600 text-black p-2 text-center rounded-full">Request Demo</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;