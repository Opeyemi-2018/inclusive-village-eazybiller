'use client'
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const pathname = usePathname();

    const shouldShowDefaultBg = !["/contact", "/faq", "/transaction"].includes(pathname);

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
            ${isScrolledDown
                    ? 'bg-white py-4'
                    : shouldShowDefaultBg
                        ? 'bg-[#faf7f2] py-5'
                        : 'py-5'
                }`}
        >

            <div className="px-3 md:px-5 flex items-center justify-between mx-auto max-w-[80rem]">
                <Link href="/" className="font-semibold text-2xl">EAZYBILLER</Link>

                <nav className={`lg:flex items-center gap-10 text-[18px] hidden ${isScrolledDown ? "bg-transparent" : "bg-white"}   p-3 rounded-lg`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/payment">Payment</Link>
                    <div className="relative group">
                        <div className="cursor-pointer flex items-center gap-2">
                            Pages
                            <span className="transition-transform duration-300 transform group-hover:rotate-180">
                                <FaChevronDown size={14} />
                            </span>
                        </div>

                        <div
                            className="absolute top-full left-0 w-40 p-3 bg-white shadow-xl rounded-md opacity-0 translate-y-1 pointer-events-none 
                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto 
                            transition-all duration-300 z-50 flex flex-col"
                        >
                            <Link href="/transaction" className="py-2 px-4 hover:bg-gray-100 hover:text-orange-600">Transaction</Link>
                            <Link href="/contact" className="py-2 px-4 hover:bg-gray-100 hover:text-orange-600">Contact Us</Link>
                            <Link href="/faq" className="py-2 px-4 hover:bg-gray-100 hover:text-orange-600">FAQ</Link>
                        </div>
                    </div>



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
                                <Link href="/payment" onClick={() => setOpen(false)}>Payment</Link>
                                <div className="w-full">
                                    <details className="group">
                                        <summary className="flex gap-2 justify-center items-center cursor-pointer py-2 text-[18px]">
                                            <span>Pages</span>
                                            <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <div className="mt-2 pl-4 space-y-2">
                                            <Link href="/transaction" onClick={() => setOpen(false)} className="block">Transaction</Link>
                                            <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact Us</Link>
                                            <Link href="/faq" onClick={() => setOpen(false)} className="block">FAQ</Link>
                                        </div>
                                    </details>
                                </div>
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