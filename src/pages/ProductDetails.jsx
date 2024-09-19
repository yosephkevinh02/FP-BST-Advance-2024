import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {

    const {id} = useParams();

    const {products} = useContext(ProductContext);

    const {addToCart} = useContext(CartContext);

    const product = products.find(item => {
        return item.id === parseInt(id);
    })

    if (!product) {
        return (
            <section className="min-h-screen grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-5xl font-semibold text-teal-600">
                        404
                    </p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Page not found
                    </h1>
                    <p className="mt-8 text-lg leading-7 text-gray-600 max-w-xl mx-auto">
                        Sorry, we couldn’t find the page you’re looking for
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/" className="rounded-md bg-primary px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-modOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-modOrange">
                        Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const {title, price, description, image} = product;
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='container mx-auto flex justify-center items-center py-20 lg:py-40'>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex flex-1 justify-center items-center mt-8 mb-8 lg:mt-0 lg:mb-0'>
                        <img className='max-w-[100px] lg:max-w-[300px]' src={image} alt='' />
                    </div>
                    <div className='flex-1 justify-center items-center text-center lg:text-left px-4 lg:px-0'>
                        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                            {title}
                        </h1>
                        <div className='text-xl text-red-500 font-medium mb-6'>
                            SGD {price.toFixed(2)}
                        </div>
                        <p className='mb-8'>
                            {description}
                        </p>
                        <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white rounded hover:bg-modOrange'>
                            <p className='font-extrabold text-xl lg:text-lg'>Add to Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductDetails;