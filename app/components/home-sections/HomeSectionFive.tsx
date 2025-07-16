import Image from 'next/image'

const HomeSectionFive = () => {
    return (
        <section className='py-32 px-3 md:px-5 bg-[#faf7f2]'>
            <div className="flex gap-6 flex-wrap lg:flex-nowrap mx-auto max-w-[80rem]">
                <div className='flex flex-col gap-6'>
                    <div className='max-w-[47rem] mx-auto space-y-5 inline lg:hidden'>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                            Key Features
                        </span>
                        <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Key features that make Finora powerful</h1>
                        <p className='text-[18px] md:text-[20px] text-gray-500'> Manage your finances with AI insights and secure transactions for peace of mind. Start making smarter financial decisions today!                </p>
                    </div>
                    <div>
                        <Image src={'/eazybiller-1.jpg'} alt='ring' width={700} height={700} className='h-[25rem] object-cover rounded-xl' />
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='max-w-[47rem] mx-auto space-y-5 hidden lg:inline '>
                        <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block'>
                            Key Features
                        </span>
                        <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Key features that make Finora powerful</h1>
                        <p className='text-[18px] md:text-[20px] text-gray-500'> Manage your finances with AI insights and secure transactions for peace of mind. Start making smarter financial decisions today!                </p>
                    </div>

                    <div className='space-y-4'>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>1. Create Your Account</h1>
                            <p className='text-[18px] md:text-[20px]'>Create your account in just seconds with only your email and a secure password. Enjoy instant access to powerful financial tools and valuable resources.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>1. Create Your Account</h1>
                            <p className='text-[18px] md:text-[20px]'>Create your account in just seconds with only your email and a secure password. Enjoy instant access to powerful financial tools and valuable resources.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>1. Create Your Account</h1>
                            <p className='text-[18px] md:text-[20px]'>Create your account in just seconds with only your email and a secure password. Enjoy instant access to powerful financial tools and valuable resources.</p>
                        </div>
                        <div className="bg-white space-y-6  p-6 rounded-2xl ">
                            <h1 className='text-[22px] font-semibold'>1. Create Your Account</h1>
                            <p className='text-[18px] md:text-[20px]'>Create your account in just seconds with only your email and a secure password. Enjoy instant access to powerful financial tools and valuable resources.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeSectionFive