import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const GetStarted = () => {
    return (
        <section className="py-32 px-3 md:px-5">
            <div className="max-w-[47rem] mx-auto space-y-5 flex flex-col">
                <div className='max-w-[47rem] mx-auto space-y-5 inline lg:hidden'>
                    <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                        Get Started
                    </span>
                    <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Secure, reliable, and trusted by thousands</h1>
                    <p className='text-[18px] md:text-[20px] text-gray-500'> Join thousands who trust us for secure financial management. Your data is protected with top encryption. </p>
                </div>
                <button className="rounded-full pl-5 pr-2 py-2 bg-orange-600 text-[#0b0b0b] text-[18px] flex items-center gap-3">
                    Try for free
                    <span className="bg-white p-2 rounded-full">
                        <IoIosArrowRoundForward size={25} className="text-black" />
                    </span>
                </button>
            </div>
        </section>
    )
}

export default GetStarted