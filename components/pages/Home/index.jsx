import React from 'react';
import { useEffect, useRef } from 'react';
import { Banner } from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Newsletter from "../../components/Newsletter";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = () => {
    const blogsRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === '#blogs') {
            blogsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <Banner />
            <ProductsPreview />
            <div ref={blogsRef}>
                <Blogs />
            </div>
            <Newsletter />
        </>
    )
}

export default Home;
