import Image from 'next/image'
// import { FaStar } from "react-icons/fa";

const HomeSectionFive = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='max-w-[40rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Why Choose EazyBiller
                </span>

                <h1 className='text-[40px]  md:text-[50px] font-bold leading-tight'> Cross-Border Capabilities </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 pt-12 bg-white mx-auto max-w-[80rem]">
                <div className="bg-orange-200 rounded-2xl overflow-hidden shadow-md w-full lg:w-[45%] flex flex-col gap-28 justify-between">
                    <Image
                        src="/wallet.avif"
                        alt="Wallet with card" width={200} height={200}
                        className="w-full h-[20rem] object-cover rounded-lg"
                    />
                    <p className="text-[20px] font-semibold p-5">
                        Accept international payments with multi-currency support
                    </p>
                </div>

                {/* Middle: Text Content */}
                <div className="bg-orange-200 rounded-2xl overflow-hidden shadow-md w-full lg:w-[25%] flex flex-col gap-28 justify-between">
                    <Image
                        src="/wallet.avif"
                        alt="Wallet with card" width={200} height={200}
                        className="w-full h-[20rem] object-cover rounded-lg"
                    />
                    <p className="text-[20px] font-semibold p-5">
                        Apply real-time exchange rates                    </p>
                </div>

                {/* Right: Card Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full lg:w-[25%] flex flex-col gap-28 justify-between">
                    <Image
                        src="/wallet.avif"
                        alt="Wallet with card" width={200} height={200}
                        className="w-full h-[20rem] object-cover rounded-lg"
                    />
                    <p className="text-[20px] font-semibold p-5">
                        Accept international payments with multi-currency support
                    </p>

                </div>
            </div>
        </section>
    )
}

export default HomeSectionFive