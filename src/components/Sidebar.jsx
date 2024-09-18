import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed to-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex justify-between items-center py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>
                    Shopping Bag (0)
                </div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2xl' onClick={handleClose} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;