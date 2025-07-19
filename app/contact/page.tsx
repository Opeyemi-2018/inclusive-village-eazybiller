'use client';
import { FiFacebook } from "react-icons/fi";
import { CiUser } from "react-icons/ci";


const Contact = () => {

    return (
        <section className="p-32 px-3 md:px-5 bg-[#faf7f2]">
            <div className="flex flex-col lg:flex-row max-w-[80rem] mx-auto items-center gap-6 pt-16">
                <div className="h-[40rem]  space-y-5 flex flex-col bg-white rounded-xl lg:p-12 p-[60px] flex-1">
                    <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                        Contact us
                    </span>
                    <h1 className="text-[35px] md:text-[45px] font-bold leading-tight">
                        Get in touch with us now today
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-500">
                        We’d love to hear from you! Whether you have questions, feedback, or need support, our team is here to help.
                    </p>

                    <div className="space-y-6 max-w-[30rem]">
                        <h1>Follow us on:</h1>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <span className="flex items-center gap-3 text-[20px] text-gray-500"> <FiFacebook size={50} className="bg-[#faf7f2] p-4 rounded-full" /> Facebook </span>
                            <span className="flex items-center gap-3 text-[20px] text-gray-500"> <FiFacebook size={50} className="bg-[#faf7f2] p-4 rounded-full" /> Facebook </span>
                            <span className="flex items-center gap-3 text-[20px] text-gray-500"> <FiFacebook size={50} className="bg-[#faf7f2] p-4 rounded-full" /> Facebook </span>
                            <span className="flex items-center gap-3 text-[20px] text-gray-500"> <FiFacebook size={50} className="bg-[#faf7f2] p-4 rounded-full" /> Facebook </span>
                        </div>
                    </div>
                </div>

                <div className=" h-[40rem] w-full space-y-5 flex flex-col bg-white rounded-xl lg:p-12 p-[60px] flex-1">
                    <form action="" className="space-y-6 ">
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[18px] text-gray-500">Name</label>
                            <input type="text" className="w-full bg-[#faf7f2] border-none rounded-full py-4 pl-14 pr-8" placeholder="full name" />
                            <CiUser size={25} className="absolute bottom-4 left-4 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label className="text-[18px] text-gray-500" >Email</label>
                            <input type="email" className="w-full bg-[#faf7f2] border-none rounded-full py-4 pl-14 pr-8" placeholder="full name" />
                            <CiUser size={25} className="absolute bottom-4 left-4 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label className="text-[18px] text-gray-500">Number</label>
                            <input type="number" className="w-full bg-[#faf7f2] border-none rounded-full py-4 pl-14 pr-8" placeholder="full name" />
                            <CiUser size={25} className="absolute bottom-4 left-4 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label className="text-[18px] text-gray-500">Additional info</label>
                            <input type="text" className="w-full bg-[#faf7f2] border-none rounded-lg py-8 pl-14 pr-8" placeholder="Additional info that you may need to add" />
                            <CiUser size={25} className="absolute bottom-8 left-4 text-gray-300" />
                        </div>

                        <button className="p-4 rounded-full bg-orange-600 text-[20px] w-full">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
