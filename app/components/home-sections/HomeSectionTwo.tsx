import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const HomeSectionTwo = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='max-w-[40rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Why Choose Finora
                </span>

                <h1 className='text-[40px]  md:text-[50px] font-bold leading-tight'>Your path to smarter Financial success
                </h1>
                <p className='text-[18px]  md:text-[20px] text-gray-500'>Finora simplifies finances with easy tracking, budgeting, and personalized insights, helping users achieve financial goals.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 pt-12 bg-white mx-auto max-w-[80rem]">
                <div className="relative bg-gray-50 w-full lg:w-[45%]   p-6 rounded-2xl flex items-center justify-center">

                </div>

                {/* Middle: Text Content */}
                <div className="flex-1 bg-orange-200 rounded-2xl p-6 w-full lg:w-[30%]  flex flex-col gap-28 justify-between">
                    <div className='space-y-3 text-orange-600'>
                        <FaStar size={30} />
                        <h2 className="text-2xl font-semibold ">
                            Optimize your spending with smart, AI-powered financial insights
                        </h2>
                    </div>
                    <div >
                        <p className="text-gray-700 text-[18px]">
                            Automated Expense Tracking <br />
                            Get real-time reports & alerts to manage your finances.
                        </p>
                        <button className="mt-4 w-full text-white px-6 py-2 rounded-full bg-orange-600 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Right: Card Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full lg:w-[25%] flex flex-col gap-28 justify-between">
                    <Image
                        src="/wallet.avif"
                        alt="Wallet with card" width={200} height={200}
                        className="w-full h-[20rem] object-cover rounded-lg"
                    />
                    <p className="text-[20px] font-semibold p-5">
                        Secure Payments, <br /> Anytime, Anywhere
                    </p>

                </div>
            </div>
        </section>
    )
}

export default HomeSectionTwo