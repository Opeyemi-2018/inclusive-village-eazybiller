import Image from "next/image"

const AboutSectionTwo = () => {
    return (
        <section className='py-36 px-3 md:px-5'>
            <div className="flex flex-wrap lg:flex-nowrap gap-16 max-w-5xl mx-auto">
                <div className='max-w-[30rem] mx-auto space-y-5 flex flex-col '>
                    <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                        Our Mission
                    </span>
                    <h1 className='text-[40px]  md:text-[50px] font-bold leading-tight'> Empowering you to take full control of your finances</h1>
                    <p className='text-[18px]  md:text-[20px] text-gray-500'>At Finora, we make financial freedom accessible with smart, intuitive tools for budgeting, saving, and planning. Manage your money effortlessly and simplify your financial journey.</p>
                </div>
                <div className="w-full  flex flex-col-reverse lg:flex-row gap-6 relative mt-16 lg:mt-0">
                    {/* Top Left Dash - only on desktop */}
                    <div className="lg:flex flex-col gap-5 items-end justify-end">
                        <div className=" lg:inline hidden">
                            <Image
                                src="/dash-3.svg"
                                alt="dash overlay"
                                width={500}
                                height={200}
                                className="rounded-xl w-full h-[7rem]  shadow-2xl max-w-[20rem]"
                            />
                        </div>
                        <div className="w-full h-auto">
                            <Image
                                src="/biller-2.jpg"
                                alt="dash"
                                width={700}
                                height={200}
                                className="rounded-xl  shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Biller and bottom dash - always visible */}
                    <div className="flex flex-col gap-4 items-center w-full">
                        <div>
                            <Image
                                src="/eazybiller-4.jpg"
                                alt="biller"
                                width={200}
                                height={400}
                                className="rounded-xl w-full h-[20rem] object-cover"
                            />
                        </div>
                        <div className="w-full ">
                            <Image
                                src="/dash-3.svg"
                                alt="dash bottom"
                                width={400}
                                height={200}
                                className="rounded-xl w-full object-cover h-[7rem]  shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionTwo