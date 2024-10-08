import { useContext, useRef } from 'react';
import { ProductContext } from '../contexts/ProductContext'; 
import Product from '../components/Product';
import Landing from '../components/Landing';

const Home = () => {

    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter((item) => {
        return item.category;
    });

    const productsRef = useRef(null);

    return (
    <div>
        <Landing productsRef={productsRef} />
        <section ref={productsRef} className='py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 lg:px-5'>
                    {filteredProducts.map((product) => {
                        return <Product product={product} key={product.id}/>;
                        })
                    }
                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;
