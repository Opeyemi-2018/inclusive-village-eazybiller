import Image from 'next/image'

const AboutSectionFour = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='flex flex-col-reverse lg:flex-row gap-10 max-w-[60rem] mx-auto'>
                <div className="flex gap-4 w-full flex-1 h-[30rem]">
                    <div className="space-y-3">
                        <div className='h-[42%]'>
                            <Image
                                src={'/biller-3.jpg'}
                                width={500}
                                height={500}
                                alt='biller'
                                className='rounded-xl h-full object-cover'
                            />
                        </div>
                        <div className='bg-[#faf7f2] space-y-4 rounded-xl p-6 h-[54%]'>
                            <h1 className='text-[30px] md:text-[50px] font-bold leading-tight'>100k+</h1>
                            <p className='text-[18px] md:text-[20px] text-gray-500'>
                                100K+ users trust Eazy biller worldwide for simplicity.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[100%]">
                        <Image
                            src={'/eazybiller-1.jpg'}
                            width={500}
                            height={500}
                            alt='biller'
                            className='rounded-xl h-full object-cover'
                        />
                    </div>
                </div>

                <div className='space-y-5 flex flex-1 flex-col lg:justify-center'>
                    <div className='max-w-[40rem] lg:mx-auto space-y-5 flex  flex-col '>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                            Our Story
                        </span>
                        <h1 className='text-[40px]  md:text-[50px] font-bold leading-tight'> How Eazy biller is Redefining Modern Finance Today</h1>
                    </div>
                    <div className='text-[18px] space-y-2'>
                        <h2>We’re making finance smarter, easier, and more inclusive for everyone.</h2>
                        <h2>We’re making finance smarter, easier, and more inclusive for everyone.</h2>
                        <p>Eazy biller simplifies money management with smart tools that help individuals and businesses budget, save, and plan confidently.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionFour;
