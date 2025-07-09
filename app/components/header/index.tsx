'use client'

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="px-3 md:px-5  py-5 fixed w-full">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-2xl">EAZYBILLER</h1>

                <nav className="lg:flex items-center gap-10 text-[18px] hidden bg-white shadow-xl p-3 rounded-lg">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
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
                            {/* <SheetHeader>
                                <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                            </SheetHeader> */}

                            <nav className="flex flex-col justify-center items-center gap-6 text-[18px] mt-6">
                                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/" onClick={() => setOpen(false)}>About</Link>
                                <Link href="/" onClick={() => setOpen(false)}>Pricing</Link>
                                <Link href="/" onClick={() => setOpen(false)}>Contact</Link>
                                <Button className="mt-4 w-full rounded-full">Request Demo</Button>
                            </nav>
                        </SheetContent>

                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
