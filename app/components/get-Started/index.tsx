import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Image from 'next/image'
const GetStarted = () => {
    return (
        <section className=" px-3 md:px-5">
            <div className='flex flex-wrap lg:flex-nowrap  justify-between mx-auto max-w-[80rem]'>
                <div className="max-w-[35rem] pt-32 space-y-5 flex flex-col">
                    <div className='max-w-[47rem] mx-auto space-y-5 '>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                            Get Started
                        </span>
                        <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Your Financial Command Center</h1>
                        <p className='text-[18px] md:text-[20px] text-gray-500'> Eazy Biller is more than just invoicing. It&apos;s your complete financial operations suite—built to support startups and scale with enterprises</p>
                        <p className='text-[18px] md:text-[20px] text-gray-500'>Whether you&apos;re automating payouts, managing global clients, or delivering frictionless billing, Eazy Biller powers your success</p>
                    </div>
                    <button className="rounded-full pl-5 mt-6 pr-2 w-fit py-2 bg-orange-600 text-[#0b0b0b] text-[18px] flex items-center gap-3">
                        Try for free
                        <span className="bg-white p-2 rounded-full">
                            <IoIosArrowRoundForward size={25} className="text-black" />
                        </span>
                    </button>
                </div>

                <div className='w-full lg:w-[40%]  lg:pt-32'>
                    <Image src={'/laugh.avif'} alt='eazy biller' width={700} height={700} className='' />
                </div>
            </div>
        </section>
    )
}

export default GetStarted