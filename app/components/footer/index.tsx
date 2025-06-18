import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
// import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer className='bg-[#1c1a1e] text-white py-16 px-4 md:px-10'>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Logo & Brand */}
                    <div className="space-y-4">
                        <Link href={'/'}>
                            <Image src="/images/inclusive-logo.jpg" alt="inclusive-logo" width={70} height={70} className="rounded-full" />
                        </Link>
                        <h2 className="uppercase text-xl bg-[#222222] p-3 rounded-md inline-block">Inclusive Village</h2>
                        <p className="text-gray-400 text-sm max-w-xs">
                            We are a global digital brand tech agency committed to building inclusive products.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#222222] p-3 rounded-md">
                                    <MdMarkEmailUnread size={22} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Send us mail</p>
                                    <p className="text-lg font-semibold">info@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#222222] p-3 rounded-md">
                                    <Image src="/icon/whatsapp.svg" alt="whatsapp" width={24} height={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">WhatsApp</p>
                                    <p className="text-lg font-semibold">+234</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 font-semibold text-sm mt-4">
                                View Site Map <FiArrowUpRight />
                            </button>
                        </div>
                    </div>

                    {/* Newsletter & Links */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Newsletter</h2>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-[#222222] rounded-md text-white placeholder-gray-400"
                            />
                            <IoIosSend size={20} className="absolute top-4 right-3 text-white" />
                        </div>
                        <p className="capitalize text-sm">Connect with us today!!!</p>
                        <div className="flex gap-4 mt-2">
                            <a className="bg-white p-2 rounded-full text-black" href="#"><FaFacebookF /></a>
                            <a className="bg-white p-2 rounded-full text-black" href="#"><RiTwitterXFill /></a>
                            <a className="bg-white p-2 rounded-full text-black" href="#"><FaLinkedinIn /></a>
                            <a className="bg-white p-2 rounded-full text-black" href="#"><AiFillInstagram /></a>
                        </div>

                        <div className="pt-8">
                            <h2 className="font-semibold text-xl mb-2">Quick Links</h2>
                            <div className="flex md:flex-row flex-col gap-4 text-sm text-gray-400">
                                <Link href="/">Home</Link>
                                <Link href="/pages/payment">Payment</Link>
                                <Link href="/pages/product">Product</Link>
                                <Link href="/pages/developer">Developer</Link>
                                 <Link href="/pages/company">Company</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Bar */}
            <div className="bg-[#1c1a1e] border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} All Rights Reserved.
            </div>
        </>
    );
};

export default Footer;
