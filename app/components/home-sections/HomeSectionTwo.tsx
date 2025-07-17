import Image from 'next/image'

const HomeSectionTwo = () => {
    return (
        <section className='py-32 px-3 md:px-5 bg-[#faf7f2]'>
            <div className="flex gap-6 flex-wrap lg:flex-nowrap mx-auto max-w-[80rem]">
                <div className='flex flex-col gap-6'>
                    <div className='max-w-[47rem] mx-auto space-y-5 inline lg:hidden'>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                            Accessibility
                        </span>
                        <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'> Multi-Platform Accessibility</h1>
                        <p className='text-[18px] md:text-[20px] text-gray-500'>  Anywhere. Anytime. On Any Device.</p>
                    </div>
                    <div>
                        <Image src={'/eazybiller-1.jpg'} alt='ring' width={700} height={700} className='h-[25rem] object-cover rounded-xl' />
                    </div>
                </div>
                <div className=''>
                    <div className='max-w-[47rem] mx-auto space-y-3 hidden lg:inline'>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                            Accessibility
                        </span>
                        <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Multi-Platform Accessibility</h1>
                        <p className='text-[18px] md:text-[20px] text-gray-500'>  Anywhere. Anytime. On Any Device.</p>
                    </div>

                    <div className='space-y-4 mt-10'>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>Web Platform</h1>
                            <p className='text-[18px] md:text-[20px]'>Access full functionality via any modern browser with a responsive dashboard for real-time financial control.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>Mobile Apps (iOS & Android)</h1>
                            <p className='text-[18px] md:text-[20px]'> Manage operations on the go—issue invoices, accept payments, get alerts.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>Admin Control Panel</h1>
                            <p className='text-[18px] md:text-[20px]'>Central hub for monitoring financial data, managing users, and enforcing compliance.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>RESTful API</h1>
                            <p className='text-[18px] md:text-[20px]'>Connect seamlessly to ERPs, CRMs, and custom systems for automation and workflow integration.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeSectionTwo