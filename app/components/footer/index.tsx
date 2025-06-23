import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1c1a1e] text-white py-12 px-4 md:px-10 text-sm">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <Link href="/">
                            <Image
                                src="/images/inclusive-logo.jpg"
                                alt="inclusive-logo"
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                        </Link>
                        <h2 className="uppercase text-lg font-medium tracking-wide">Inclusive Village</h2>
                        <p className="text-gray-400 max-w-xs">
                            Building tailored solutions for forward-thinking financial institutions and businesses.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-[#222222] p-2 rounded-md">
                                    <MdMarkEmailUnread size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Send us mail</p>
                                    <p className="font-medium text-sm">info@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-[#222222] p-2 rounded-md">
                                    <Image
                                        src="/icon/whatsapp.svg"
                                        alt="whatsapp"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">WhatsApp</p>
                                    <p className="font-medium text-sm">+234</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-1 text-xs font-medium mt-2 text-white/80 hover:text-white transition">
                                View Site Map <FiArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Newsletter & Links */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-2 px-3 bg-[#222222] rounded-md text-sm text-white placeholder-gray-400"
                            />
                            <IoIosSend size={18} className="absolute top-2.5 right-3 text-white cursor-pointer" />
                        </div>

                        <p className="text-gray-400 text-xs">Stay updated with our latest solutions and insights.</p>

                        <div className="flex gap-3">
                            <a className="bg-white p-2 rounded-full text-black text-sm" href="#"><FaFacebookF /></a>
                            <a className="bg-white p-2 rounded-full text-black text-sm" href="#"><RiTwitterXFill /></a>
                            <a className="bg-white p-2 rounded-full text-black text-sm" href="#"><FaLinkedinIn /></a>
                            <a className="bg-white p-2 rounded-full text-black text-sm" href="#"><AiFillInstagram /></a>
                        </div>

                        <div className="pt-6">
                            <h4 className="font-medium text-sm mb-2">Quick Links</h4>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-400">
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
            <div className="bg-[#1c1a1e] border-t border-gray-700 py-3 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Inclusive Village. All Rights Reserved.
            </div>
        </>
    );
};

export default Footer;
