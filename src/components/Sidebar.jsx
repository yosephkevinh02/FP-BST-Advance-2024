import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext);

    const {cart, clearCart, total, itemAmount} = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed to-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex justify-between items-center py-4 border-b'>
                <div className='uppercase text-sm font-semibold'>
                    Shopping Bag ({itemAmount})
                </div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2xl' onClick={handleClose} />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[480px] overflow-y-auto overflow-x-hidden border-b'>
                {cart.map(item => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total : </span>SGD {parseFloat(total).toFixed(2)}
                    </div>
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
                <Link to={'/cart'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>
                    View Cart
                </Link>
                <Link to={'/checkout'} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;