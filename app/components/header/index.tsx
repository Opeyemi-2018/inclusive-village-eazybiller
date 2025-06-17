"use client"
import { useEffect, useState } from "react";
import { routes, Route } from "@/utils/route";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "@/app/context/themeContext";
import { FiPlus, FiMinus } from "react-icons/fi";



const Navbar = () => {
    const { toggleTheme } = useTheme();
    const pathname = usePathname();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggle = () => setIsMobileNavOpen((prev) => !prev);
    const closeMobileNav = () => setIsMobileNavOpen(false);

    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

    const handleDropdownToggle = (id: number) => {
        setOpenDropdownId(prev => (prev === id ? null : id));
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <div className={`fixed right-0 left-0 z-20 top-0 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-[#222222] shadow" : "bg-transparent"}`}>
                <nav className="max-w-6xl md:px-5 px-3 mx-auto py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center lg:gap-16 gap-10">
                            <Link href={'/'}>
                                <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" width={50} height={50} className="rounded-full" />
                            </Link>

                            <ul className="lg:flex hidden items-center gap-6 font-semibold dark:text-white text-gray-600 text-[17px]">
                                {routes.map((route: Route) => (
                                    <li key={route.id} className="relative group">
                                        <Link
                                            href={route.path}
                                            className={`relative transition-all duration-200 pb-1 ${pathname === route.path
                                                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-500"
                                                : "hover:text-[#2b583e]"
                                                }`}
                                        >
                                            {route.name}
                                        </Link>

                                        {/* Dropdown (if children exist) */}
                                        {route.children && (
                                            <ul className="absolute top-full left-0 mt-2 w-44 bg-white dark:bg-[#222222] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                                {route.children.map((child) => (
                                                    <li key={child.id}>
                                                        <Link
                                                            href={child.path}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white text-gray-800"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>



                        </div>
                        <div className="flex items-center gap-6">
                            <Button onClick={toggleTheme} variant={'outline'} className=" dark:text-white rounded-full">
                                <IoIosSunny />
                            </Button>

                            <Button onClick={handleToggle} className="lg:hidden inline bg-white hover:text-white text-black">
                                <FaBarsStaggered />
                            </Button>
                        </div>

                        <div className="lg:flex hidden">
                            {/* <button className="p-4 rounded-full dark:bg-white dark:text-gray-800 bg-gray-800 border text-white border-gray-400">
                                <GrSearch />
                            </button> */}
                            <Link href="/pages/solution#contact" scroll={true}>
                                <button className="flex items-center gap-4 p-4 rounded-full font-semibold bg-[#75eba6] text-black">
                                    Let&apos;s Talk <FiArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile nav */}
            {isMobileNavOpen && (
                <div className="bg-white dark:bg-[#222222] fixed h-full w-80 z-30 top-0 left-0 lg:hidden shadow-lg transition-all duration-300">
                    <nav className="p-6 flex flex-col h-full justify-between">
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between items-center">
                                <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" width={50} height={50} className="rounded-full" />
                                <Button onClick={closeMobileNav} className="bg-white text-black hover:text-white">
                                    <LiaTimesSolid />
                                </Button>
                            </div>

                            {/* Mobile menu list */}
                            <ul className="flex flex-col gap-4 font-semibold dark:text-white text-gray-700 text-[17px]">
                                {routes.map((route: Route) => (
                                    <li key={route.id} className="flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <Link
                                                href={route.path}
                                                onClick={closeMobileNav}
                                                className="py-1"
                                            >
                                                {route.name}
                                            </Link>
                                            {route.children && (
                                                <button
                                                    onClick={() => handleDropdownToggle(route.id)}
                                                    className="text-2xl px-2"
                                                >
                                                    {openDropdownId === route.id ? <FiMinus /> : <FiPlus />}
                                                </button>
                                            )}

                                        </div>

                                        {route.children && openDropdownId === route.id && (
                                            <ul className="pl-4 mt-2 flex flex-col gap-4">
                                                {route.children.map((child) => (
                                                    <li key={child.id}>
                                                        <Link
                                                            href={child.path}
                                                            onClick={closeMobileNav}
                                                            className=" text-gray-600 dark:text-white hover:underline"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <Link href="/pages/solution#contact" scroll={true}>
                            <button className="flex items-center gap-4 p-4 rounded-full font-semibold bg-[#75eba6] text-black">
                                Let&apos;s Talk <FiArrowUpRight />
                            </button>
                        </Link>
                    </nav>
                </div>
            )}

        </>
    );
};

export default Navbar;
