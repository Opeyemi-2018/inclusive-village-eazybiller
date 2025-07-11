import Image from 'next/image'

const AboutSectionFive = () => {
    return (
        <section className='py-32 bg-[#faf7f2] px-3 md:px-5'>
            <div className='max-w-[35rem] mx-auto space-y-5 flex  lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Key Benefits
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Meet the team behind your financial freedom</h1>
                <p className='text-[18px] md:text-[20px] text-gray-500'> At Finora, our team of experts is dedicated to simplifying your financial journey and helping you achieve financial freedom. </p>
            </div>

            <div className="flex flex-col max-w-[60rem] mx-auto lg:flex-row gap-6 pt-12">
                <div className="relative bg-white space-y-4  p-6 rounded-2xl ">
                    <Image src={'/man.avif'} alt='ring' width={700} height={700} className='rounded-2xl' />
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h2 className="text-2xl font-semibold ">
                            Kristin Watson
                        </h2>
                        <p>Senior Sales Executives</p>
                    </div>
                </div>

                <div className="relative bg-white space-y-4  p-6 rounded-2xl ">
                    <Image src={'/man.avif'} alt='ring' width={700} height={700} className='rounded-2xl' />
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h2 className="text-2xl font-semibold ">
                            Kristin Watson
                        </h2>
                        <p>Senior Sales Executives</p>
                    </div>
                </div>

                <div className="relative bg-white space-y-4  p-6 rounded-2xl ">
                    <Image src={'/man.avif'} alt='ring' width={700} height={700} className='rounded-2xl' />
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h2 className="text-2xl font-semibold ">
                            Kristin Watson
                        </h2>
                        <p>Senior Sales Executives</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionFive