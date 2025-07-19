import Image from "next/image"

const AboutSectionTwo = () => {
    return (
        <section className='py-36 px-3 md:px-5'>
            <div className="flex lg:flex-row flex-col lg:gap-16 gap-14 max-w-[60rem] mx-auto">
                <div className='max-w-[27rem] lg:mx-auto space-y-16 flex flex-col  flex-1'>
                    <h2 className='text-[30px] md:text-[36px] font-bold leading-tight'>
                        Why Choose Eazy Biller?
                    </h2>
                    <div className="text-[18px] md:text-[20px] text-gray-700 space-y-4">
                        <p>Intuitive & Easy to Use</p>
                        <p>Modular & Fully Customizable</p>
                        <p>Enterprise-Ready Architecture</p>
                        <p>API-Friendly & Scalable</p>
                        <p>Multi-Language & Multi-Currency Support</p>
                        <p>Global-First with Local Sensitivity</p>
                        <p>Affordably Priced for Every Stage of Growth</p>
                    </div>
                </div>

                <div className="flex flex-col-reverse flex-1 lg:flex-row gap-6 relative mt-16 lg:mt-0">
                    <div className="flex flex-col-reverse lg:flex-row gap-6 w-full relative">
                        <div className="lg:flex flex-col gap-5 items-end justify-end w-full hidden">
                            <div className="lg:-mr-10 xl:-mr-16 z-10">
                                <Image
                                    src="/dash-3.svg"
                                    alt="dash overlay"
                                    width={500}
                                    height={200}
                                    className="rounded-xl w-full h-[7rem] shadow-2xl max-w-[20rem] image-animation-item-dash-3-top"
                                />
                            </div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/dash-2.svg"
                                    alt="dash"
                                    width={700}
                                    height={200}
                                    className="rounded-xl shadow-2xl image-animation-item-dash-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center w-full">
                            <div className="w-full">
                                <Image
                                    src="/biller-1.jpg"
                                    alt="biller"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full lg:h-[18rem] h-[25rem] object-cover image-animation-item-biller"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/dash-3.svg"
                                    alt="dash bottom"
                                    width={400}
                                    height={200}
                                    className="rounded-xl w-full object-cover h-[20rem] lg:h-[7rem] shadow-2xl image-animation-item-dash-3-bottom"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="lg:flex flex-col gap-5 items-end justify-end">
                        <div className="lg:inline hidden">
                            <Image
                                src="/dash-3.svg"
                                alt="dash overlay"
                                width={500}
                                height={200}
                                className="rounded-xl w-full h-[7rem] shadow-2xl max-w-[20rem]"
                            />
                        </div>
                        <div className="w-full h-auto">
                            <Image
                                src="/biller-2.jpg"
                                alt="dash"
                                width={700}
                                height={200}
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center w-full">
                        <div className="w-full">
                            <Image
                                src="/eazybiller-4.jpg"
                                alt="biller"
                                width={200}
                                height={400}
                                className="rounded-xl w-full h-[20rem] object-cover"
                            />
                        </div>
                        <div className="w-full">
                            <Image
                                src="/dash-3.svg"
                                alt="dash bottom"
                                width={400}
                                height={200}
                                className="rounded-xl w-full object-cover h-[7rem] shadow-2xl"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default AboutSectionTwo
