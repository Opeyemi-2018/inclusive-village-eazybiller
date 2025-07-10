import Image from 'next/image'

const HomeSectionFour = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='max-w-[47rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Key Features
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Key features that make Finora powerful</h1>
                <p className='text-[18px] md:text-[20px] text-gray-500'> Manage your finances with AI insights and secure transactions for peace of mind. Start making smarter financial decisions today!                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12">
                <div className="relative bg-[#faf7f2] space-y-10   p-6 rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Smart expense tracking with AI
                        </h2>
                        <p className='text-[18px] md:text-[20px]'>AI tracking for smarter spending and instant alerts.</p>
                    </div>
                    <Image src={'/dash-2.svg'} alt='ring' width={700} height={700} />
                </div>

                {/* Right: Card Image */}
                <div className="relative bg-[#faf7f2] space-y-10  p-6 rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Easy payment connections
                        </h2>
                        <p className='text-[18px] md:text-[20px]'>Connect with over 10,000 banks globally.</p>
                    </div>
                    <Image src={'/connection.svg'} alt='ring' width={700} height={700} />
                </div>
                {/* Right: Card Image */}
                <div className="relative bg-[#faf7f2] space-y-10  p-6 rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Easy payment connections
                        </h2>
                        <p className='text-[18px] md:text-[20px]'>Connect with over 10,000 banks globally.</p>
                    </div>
                    <Image src={'/connection.svg'} alt='ring' width={700} height={700} />
                </div>
                {/* Right: Card Image */}
                <div className="relative bg-[#faf7f2] space-y-10  p-6 rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Easy payment connections
                        </h2>
                        <p className='text-[18px] md:text-[20px]'>Connect with over 10,000 banks globally.</p>
                    </div>
                    <Image src={'/connection.svg'} alt='ring' width={700} height={700} />
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFour