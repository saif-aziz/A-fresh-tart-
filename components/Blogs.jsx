import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../images/blog-img1.png';
import image2 from '../images/blog-img2.png';
import image3 from '../images/blog-img3.png';

const Blogs = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="blogs" id="blogs">
            <div class="heading">
                <h2>Check out our Blogs</h2>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                arrows={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div class = "blogs-row">
                    <div className="box">
                        <div className="img">
                            <img src={image1} alt="" />
                        </div>
                        <div className="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam exercitationem ad tenetur veritatis odio quaerat nemo inventore eos maxime?</p>
                            <a href="#blogs" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class = "blogs-row">
                    <div className="box">
                        <div className="img">
                            <img src={image2} alt="" />
                        </div>
                        <div className="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam exercitationem ad tenetur veritatis odio quaerat nemo inventore eos maxime?</p>
                            <a href="#blogs" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class = "blogs-row">
                    <div className="box">
                        <div className="img">
                            <img src={image3} alt="" />
                        </div>
                        <div className="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam exercitationem ad tenetur veritatis odio quaerat nemo inventore eos maxime?</p>
                            <a href="#blogs" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default Blogs;
