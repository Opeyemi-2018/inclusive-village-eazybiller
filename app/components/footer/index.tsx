import Link from 'next/link'
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <section className='pt-32 pb-20 px-3 md:px-5 bg-[#faf7f2] font-sans'>
            <div className='flex flex-wrap lg:flex-nowrap lg:gap-0 gap-10 justify-between mx-auto max-w-[80rem]'>
                <div className='space-y-6 w-full lg:w-[30%]'>
                    <div className='space-y-3'>
                        <h1 className="font-semibold text-2xl">EAZYBILLER</h1>
                        <p className='text-[20px]'>We simplify finance with tools to help you budget and grow wealth. Take control of your money effortlessly and confidently.</p>
                    </div>
                    <div className='bg-white rounded-full py-1 w-full flex items-center justify-between shadow-md pl-3 pr-1 '>
                        <input type="text" placeholder='Email Address' className='border-none' />
                        <button className='py-2 px-3 rounded-full bg-orange-600 '>Subscribe</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 items-center md:gap-3 gap-7 justify-between w-full lg:w-[45%]'>
                    <div className='capitalize space-y-4'>
                        <h1 className='text-[22px] font-semibold'>page</h1>
                        <div className='text-[20px]  flex flex-col gap-2'>
                            <Link href={'/'}>Home</Link>
                            <Link href={'/about'}>About</Link>
                            <Link href={'/payment'}>Payment</Link>
                            <Link href={'transaction/'}>Transaction</Link>
                        </div>
                    </div>
                    <div className='capitalize space-y-4'>
                        <h1 className='text-[22px] font-semibold'>page</h1>
                        <div className='text-[20px]  flex flex-col gap-2'>
                            <Link href={'/contact'}>Contact</Link>
                            <Link href={'/faq'}>Faq</Link>
                        </div>
                    </div>

                </div>

            </div>
            <span className='w-full h-[1px] bg-gray-300 mt-24 inline-block'></span>

            <div className='flex flex-col-reverse md:flex-row justify-between md:gap-0 gap-8 mt-20 md:items-center mx-auto max-w-[80rem]'>
                <p className='text-[18px] text-gray-800'>© Copyright {new Date().getFullYear()}, All Rights Reserved by UiMile - Powered by framer</p>
                <div className='flex gap-6 items-center'>
                    <Link href={'/'} className='bg-white rounded-full p-2'><RiTwitterXLine /></Link>
                    <Link href={'/'} className='bg-white rounded-full p-2'><RiTwitterXLine /></Link>
                    <Link href={'/'} className='bg-white rounded-full p-2'><RiTwitterXLine /></Link>
                </div>
            </div>
        </section>
    )
}

export default Footer