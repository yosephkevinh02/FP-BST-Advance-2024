import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <section className="min-h-screen grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Coming Soon!
                </h1>
                <p className="mt-8 text-lg leading-7 text-gray-600 max-w-xl mx-auto">
                    We’re Working on Something Great!
                </p>
                <p className="mt-2 text-lg leading-7 text-gray-600 max-w-xl mx-auto">
                    Stay tuned for updates. We appreciate your patience!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="rounded-md bg-primary px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-modOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-modOrange">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Checkout;