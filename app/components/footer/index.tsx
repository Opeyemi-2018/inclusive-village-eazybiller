import Image from "next/image"
import Link from "next/link"
import { MdMarkEmailUnread } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";





const Footer = () => {
    return (
        <>
            <div className='bg-[#1c1a1e] py-16 md:px-10 px-3'>
                <div className="max-w-6xl mx-auto flex lg:flex-row flex-col gap-10">
                    {/* Left Div with Right Border */}
                    <div className="pr-6 lg:border-r lg:border-gray-300">
                        <div className="flex flex-col gap-6">
                            <Link href={'/'}>
                                <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" width={70} height={70} />
                            </Link>
                            <h1 className="uppercase md:text-3xl text-2xl bg-[#222222] p-3 rounded-md text-white">inclusive village</h1>
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="flex flex-col gap-10 py-6 ">
                        <h1 className="md:text-4xl text-2xl max-w-[600px] text-white">
                            We are Global Digital Brand Tech Agency.
                        </h1>
                        <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:gap-10 gap-8">
                            <div className="flex items-center gap-2 ">
                                <div className="bg-[#222222] p-3 rounded-md">
                                    <MdMarkEmailUnread size={25} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500 font-bold capitalize">send us mail</h1>
                                    <h1 className="text-white text-semibold text-2xl">info@gmail.com</h1>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <div className="bg-[#222222] p-3 rounded-md">
                                    <Image src={'/icon/whatsapp.svg'} alt="whatsapp logo" width={30} height={30} />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500 font-bold">Whatsapp</h1>
                                    <h1 className="text-white text-semibold text-2xl">+234</h1>
                                </div>
                            </div>

                            <div>
                                <Button className="flex gap-3 p-2 font-bold"
                                    variant="outline"
                                > View Site Map
                                    <FiArrowUpRight />
                                </Button>
                            </div>
                        </div>

                        <div className="flex lg:items-center lg:flex-row flex-col lg:gap-0 gap-5 justify-between capitalize pt-6">
                            <div>
                                <h1 className="font-semibold pb-3 text-2xl text-white">Links</h1>
                                <div className="flex flex-col gap-4 text-gray-500 font-semibold ">
                                    <Link href={'/'}>Homes</Link>
                                    <Link href={'/pages/about'}>About Us</Link>
                                    <Link href={'/pages/solution'}>Solution</Link>
                                    <Link href={'/pages/portfolio'}>Portfolio</Link>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h1 className="font-semibold pb-3 text-2xl text-white">newsletter</h1>
                                <div className="relative">
                                    <input type="text" placeholder="email" className="p-3 w-full rounded-md bg-[#222222]" />
                                    <IoIosSend size={25} className="absolute text-white top-4 right-2" />
                                </div>
                                <h2 className="text-white capitalize">connect with us today!!!</h2>
                                <div className="flex items-center lg:justify-between lg:gap-0 gap-10">
                                    <button className="bg-white rounded-full p-2 text-black"><FaFacebookF /></button>
                                    <button className="bg-white rounded-full p-2 text-black"><RiTwitterXFill /></button>
                                    <button className="bg-white rounded-full p-2 text-black"><FaLinkedinIn /></button>
                                    <button className="bg-white rounded-full p-2 text-black"><AiFillInstagram /></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <hr />

            <div className="bg-[#1c1a1e] px-4 pb-3">
                <h2 className="text-center text-gray-500 ">Copyright {new Date().getFullYear()}  All Right Reserved.</h2>
            </div>
        </>
    )
}

export default Footer