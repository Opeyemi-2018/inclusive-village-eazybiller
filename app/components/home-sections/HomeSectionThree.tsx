import Image from 'next/image'

const HomeSectionThree = () => {
    return (
        <section className='py-32 bg-[#faf7f2] px-3 md:px-5'>
            <div className='max-w-[47rem] mx-auto space-y-5 flex  lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Key Benefits
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Unlock the advantage of smarter Financial solutions</h1>
                <p className='text-[18px] md:text-[20px] text-gray-500'> Effortlessly manage finances smarter with AI insights, secure transactions, and seamless control, ensuring peace of mind and financial growth. </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 pt-12">
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Secure transactions
                        </h2>
                        <p>Encrypted payments ensure safety and protect your sensitive data.</p>
                    </div>
                </div>

                {/* Middle: Text Content */}
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Secure transactions
                        </h2>
                        <p>Encrypted payments ensure safety and protect your sensitive data.</p>
                    </div>
                </div>

                {/* Right: Card Image */}
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Secure transactions
                        </h2>
                        <p>Encrypted payments ensure safety and protect your sensitive data.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionThree