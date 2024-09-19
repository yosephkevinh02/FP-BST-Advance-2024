import { Link } from 'react-router-dom';
import Phone from '../img/app-phone.png';


const Character = () => {
    return (
        <section className=" h-[800px] bg-home bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-around items-center h-full">
                <div className='flex flex-col justify-center items-center text-center md:text-left'>
                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>             
                        new trend
                    </div>
                    <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                        autumn <br />
                        <span className='font-semibold'>women</span>
                    </h1>
                    <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
                        Discover More
                    </Link>
                </div>
                <div className='flex justify-center items-center mt-4 md:mt-0 md:ml-8'>
                    <img className='w-[200px] sm:w-[300px] transition-all duration-300' src={Phone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Character;