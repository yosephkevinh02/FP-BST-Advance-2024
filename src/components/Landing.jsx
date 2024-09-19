import Phone from '../img/app-phone.png';

const Landing = ({ productsRef }) => {
    return (
        <section className='h-[800px] bg-home bg-no-repeat bg-cover bg-center items-center'>
            {/* container */}
            <div className='container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full px-4 gap-[64px] md:gap-[160px] lg2:gap-[256px]'>
                {/* text button */}
                <div className='flex flex-col justify-center items-center text-center md:text-left'>
                    {/* text */}
                    <div className='font-semibold flex items-center bg-modGreen text-white border-0 rounded-2xl px-3 py-1 lg2:py-2'>
                        <h1 className='text-[32px] lg2:text-[48px] xl:text-[64px] leading-[1.1] font-light px-2 py-4 lg2:py-6'>
                            <span className='font-normal drop-shadow-lg'>
                                Start Exploring  <br />
                            </span>
                            <p className='mt-3 text-[20px] lg2:text-[24px] xl:text-[30px]'>
                                Our Amazing Product
                            </p>
                        </h1>
                    </div>
                    {/* button */}
                    <button onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}className='mt-4 lg2:mt-6 uppercase md:self-start text-lg font-extrabold text-white bg-primary px-8 py-3 rounded-full border-0 hover:bg-modOrange'>
                        Find More
                    </button>
                </div>
                {/* image */}
                <div className='mt-4'>
                    <img className='w-[175px] lg2:w-[225px] xl:w-[300px] max-w-xs' src={Phone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Landing;