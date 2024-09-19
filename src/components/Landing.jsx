import Phone from '../img/app-phone.png';


const Landing = ({ productsRef }) => {
    return (
        <section className="h-[800px] bg-home bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center h-full px-4 md:px-64">
                <div className='flex flex-col justify-center items-center text-center md:text-left'>
                    <div className='font-semibold flex items-center bg-modGreen text-white border-0 rounded-xl px-3 py-1 text-left'>
                        <h1 className='text-[32px] md:text-[50px] leading-[1.1] font-light px-2 py-4'>
                            <span className='font-normal drop-shadow-lg'>
                                Start Exploring  <br />
                            </span>
                            <p className='mt-3 text-[20px] md:text-[24px]'>
                                Our Amazing Product
                            </p>
                        </h1>
                    </div>
                    <button onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}className="mt-4 self-start uppercase text-lg md:text-2xl font-extrabold text-white bg-primary px-8 py-3 rounded-full border-0 hover:bg-modOrange">
                        Find More
                    </button>
                </div>
                <div className='flex justify-center items-center mt-4 md:mt-0 md:ml-8'>
                    <img className='w-[150px] sm:w-[200px] md:w-[300px] transition-all duration-300' src={Phone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Landing;