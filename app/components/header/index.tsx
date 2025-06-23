"use client";
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

const Navbar = () => {
    const { toggleTheme } = useTheme();
    const pathname = usePathname();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentNav, setCurrentNav] = useState<Route | null>(null);

    const handleToggle = () => setIsMobileNavOpen((prev) => !prev);
    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
        setCurrentNav(null);
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
            <div
                className={`fixed right-0 left-0 z-40 top-0 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-[#222222] shadow" : "bg-transparent"
                    }`}
            >
                <nav className="max-w-6xl md:px-5 px-3 mx-auto py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center lg:gap-16 gap-10">
                            <Link href={"/"}>
                                <Image
                                    src={"/images/inclusive-logo.jpg"}
                                    alt="inclusive-logo"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            </Link>

                            <ul className="lg:flex hidden items-center gap-6 font-normal dark:text-white text-gray-600 text-[17px]">
                                {routes.map((route: Route) => (
                                    <li key={route.id} className="relative group">
                                        <Link
                                            href={route.path}
                                            className={`relative transition-all duration-200 pb-1 ${pathname === route.path
                                                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff7f50]"
                                                : "hover:text-[#2b583e]"
                                                }`}
                                        >
                                            {route.name}
                                        </Link>

                                        {route.children && (
                                            <ul
                                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3
                                                bg-white dark:bg-[#222222] shadow-2xl 
                                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                                group-hover:translate-y-2 transition-all duration-500 ease-out delay-150 z-50 p-4
                                                ${route.children.length > 4
                                                        ? "grid grid-cols-3 gap-3 w-[500px]"
                                                        : "flex flex-col gap-2 w-56"
                                                    }`}
                                            >


                                                {route.children.map((child) => (
                                                    <li key={child.id}>
                                                        <Link
                                                            href={child.path}
                                                            className={`block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white text-gray-800 text-sm font-normal relative ${pathname === child.path
                                                                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff7f50]"
                                                                : ""
                                                                }`}
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
                            <Button
                                onClick={toggleTheme}
                                variant={"outline"}
                                className="dark:text-white rounded-full"
                            >
                                <IoIosSunny />
                            </Button>

                            <Button
                                onClick={handleToggle}
                                className="lg:hidden inline bg-white hover:text-white text-black"
                            >
                                <FaBarsStaggered />
                            </Button>
                        </div>

                        <div className="lg:flex hidden">
                            <Link href="/pages/about/#contact" scroll={true}>
                                <button className="flex items-center gap-4 p-4 rounded-full font-semibold bg-[#084972]  text-white">
                                    Let&apos;s Talk <FiArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile nav */}
            {isMobileNavOpen && (
                <div className="bg-white dark:bg-[#222222] fixed h-full w-80 z-50 top-0 left-0 lg:hidden shadow-lg transition-all duration-300">
                    <nav className="p-6 flex flex-col h-full justify-between">
                        <div className="flex flex-col gap-10 overflow-y-auto">
                            <div className="flex justify-between items-center">
                                <Image
                                    src={"/images/inclusive-logo.jpg"}
                                    alt="inclusive-logo"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <Button
                                    onClick={closeMobileNav}
                                    className="bg-white text-black hover:text-white"
                                >
                                    <LiaTimesSolid />
                                </Button>
                            </div>

                            {/* Navigation List */}
                            <ul className="flex flex-col gap-4 font-normal dark:text-white text-gray-700 text-[17px]">
                                {!currentNav &&
                                    routes.map((route) => (
                                        <li key={route.id}>
                                            <div className="flex justify-between items-center">
                                                <button
                                                    onClick={() =>
                                                        route.children ? setCurrentNav(route) : closeMobileNav()
                                                    }
                                                    className="text-left w-full"
                                                >
                                                    <Link href={route.path}>{route.name}</Link>
                                                </button>
                                                {route.children && (
                                                    <button
                                                        onClick={() => setCurrentNav(route)}
                                                        className="text-xl px-2"
                                                    >
                                                        <FiArrowUpRight />
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    ))}

                                {currentNav && (
                                    <>
                                        <li>
                                            <button
                                                onClick={() => setCurrentNav(null)}
                                                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"
                                            >
                                                ← Back
                                            </button>
                                        </li>
                                        {currentNav.children?.map((child) => (
                                            <li key={child.id}>
                                                <Link
                                                    href={child.path}
                                                    onClick={closeMobileNav}
                                                    className="py-1 ml-2 block"
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>
                        </div>

                        <Link href="/pages/about#contact" scroll={true} onClick={closeMobileNav}>
                            <button className="flex items-center gap-4 p-4 rounded-full font-semibold bg-[#084972] text-white">
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
