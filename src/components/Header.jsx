import { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Header = () => {

    const [isActive, setIsActive] = useState(0);

    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 720 ? setIsActive(1) : setIsActive(0);
        });
    });

    return (
        <header className={`${isActive ? 'bg-white shadow-md' : 'bg-teal-700'} py-4 fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <div>
                        <img className='w-[60px]' src={Logo} alt='' />
                    </div>
                    <div>
                        <h1 className={`${isActive ? 'text-primary' : 'text-teal-50'} text-3xl font-extrabold uppercase`}>
                            Advance Store
                        </h1>
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                    <div className='bg-white rounded-md flex justify-center items-center w-10 h-10 hover:bg-teal-100'>
                        <BsBag className='text-2xl' />
                    </div>
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;