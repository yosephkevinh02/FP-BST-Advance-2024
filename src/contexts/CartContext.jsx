import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [itemAmount, setItemAmount] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        if (cart) {
            const totalAmount = cart.reduce((acc, currentItem) => {
                return acc + currentItem.amount
        }, 0);
            setItemAmount(totalAmount);
        }
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1};
        
        const cartItem = cart.find(item => {
            return item.id === id
        });

        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {    
            setCart([...cart, newItem]);
        }
    };

    const removeCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        });
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };
    
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id;
        });

        if (cartItem.amount === 1) {
            removeCart(id);
        } else {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: item.amount - 1}
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;