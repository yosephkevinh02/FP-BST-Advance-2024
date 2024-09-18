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
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all}`}>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <Link to={'/'} >
                    <div>
                        <img className='w-[60px]' src={Logo} alt='' />
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;