import Image from 'next/image'

const HomeSectionThree = () => {
    return (
        <section className='py-32 bg-[#faf7f2] px-3 md:px-5'>
            <div className='max-w-[47rem] mx-auto space-y-5 flex  lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Technologies
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Powered by Leading Technologies</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 pt-12 mx-auto max-w-[80rem]">
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Flutter
                        </h2>
                        <p> for unified cross-platform development</p>
                    </div>
                </div>

                {/* Middle: Text Content */}
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Laravel (PHP)
                        </h2>
                        <p>for secure, scalable backend services</p>
                    </div>
                </div>

                {/* Right: Card Image */}
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Native Modules
                        </h2>
                        <p>for mobile-specific optimization</p>
                    </div>
                </div>

                {/* Right: Card Image */}
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            CDN & Modular Architecture
                        </h2>
                        <p>for ultra-fast performance and stability</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionThree