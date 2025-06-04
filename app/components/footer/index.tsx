import Image from "next/image"
import Link from "next/link"
import { MdMarkEmailUnread } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";



const Footer = () => {
    return (
        <div className='bg-[#1c1a1e] py-16 md:px-10 px-3'>
            <div className="max-w-6xl mx-auto flex lg:flex-row flex-col gap-10">
                {/* Left Div with Right Border */}
                <div className="pr-6 border-r border-gray-300">
                    <div className="flex flex-col gap-6">
                        <Link href={'/'}>
                            <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" width={70} height={70} />
                        </Link>
                        <h1 className="uppercase md:text-3xl text-2xl bg-[#18161a] p-3 rounded-md text-white">inclusive village</h1>
                    </div>
                </div>

                {/* Right Div */}
                <div className="flex flex-col gap-10 py-6 ">
                    <h1 className="md:text-4xl text-2xl max-w-[600px] text-white">
                        We are Global Digital Brand Tech Agency.
                    </h1>
                    <div className="flex lg:flex-row flex-col lg:items-center lg:gap-6 gap-8">
                        <div className="flex items-center gap-2 ">
                            <div className="bg-[#18161a] p-3 rounded-md">
                                <MdMarkEmailUnread size={25} className="text-white" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-gray-500 font-bold capitalize">send us mail</h1>
                                <h1 className="text-white text-semibold text-2xl">info@gmail.com</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <div className="bg-[#18161a] p-3 rounded-md">
                                <Image src={'/icon/whatsapp.svg'} alt="whatsapp logo" width={30} height={30} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-gray-500 font-bold">Whatsapp</h1>
                                <h1 className="text-white text-semibold text-2xl">info@gmail.com</h1>
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
                </div>
            </div>

        </div>
    )
}

export default Footer