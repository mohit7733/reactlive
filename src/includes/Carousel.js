    import React from 'react';
    import ReactDOM from 'react-dom';
    import OwlCarousel from 'react-owl-carousel';
    import 'owl.carousel/dist/assets/owl.carousel.css';
    import 'owl.carousel/dist/assets/owl.theme.default.css';
    const options = {
        items: 4,
    };
    export default function Carousel() {
      
        return (
            <section class="orange-fade">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2 class="popular-product"><span>Popular</span> Products</h2>
                            <p></p>
                            <div class="products-slide">
                            <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
    >
         
    <div class="item">
        <div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/1.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>

                                        </div>
                                    </div>
    </div>
    <div class="item">
    <div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/2.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>
                                        </div>
                                    </div>
    </div>
    <div class="item">
    <div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/3.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>
                                        </div>
                                    </div>
    </div>
    <div class="item">
    <div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/4.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>
                                        </div>
                                    </div></div>
    <div class="item"><div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/5.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>
                                        </div>
                                    </div></div>
    <div class="item"><div class="one-slide white">
                                        <div class="testimonial">
                                            <div class="brand"><img src="image/5.jpg" /></div>
                                            <div class="testimonial-specs">
                                                <p class="price-phone">Lorem Ipsum dolor<span class="fa fa-heart-o position-relative"> </span></p>
                                                <p class="price-specs">from <span class="amount-p"> £240.00 </span><span class="amount-cut">£240.00 </span></p>
                                            </div>
                                        </div>
                                    </div></div>
    </OwlCarousel>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        )
      
    }