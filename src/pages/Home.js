import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Carousel from '../includes/Carousel';

export default function Home() {
    return (
        <>
        <Header />
            <section class="slider-area">
                <div class="single-slide-item overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="choose-market">Choose your favorite market </p>
                                <h1 class="banner-title"><span >Compare</span> Best Prices</h1>
                                <p class="choose-market">Grab it hurry.</p>
                                <button class="btn shopnow">Shop Now</button>
                            </div>
                            <div class="col-sm-6"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Carousel />
            
            <div class="container">
                <h2 class="popular-product"><span>Featured &</span>Categories</h2>
            </div>
            <section class="section-featured">
                <div class="container">
                    <div class="featured-categories">
                        <ul class="categories-list">
                            <li>
                                <div class="f-clist1">
                                    <img src="image/icon1.png" /><p>Home &<br /> Interior</p>
                                </div>
                            </li>
                            <li>
                                <div class="f-clist2">
                                    <img src="image/icon2.png" /><p>Phones &<br /> Wearbles</p>
                                </div></li>
                            <li>
                                <div class="f-clist3">
                                    <img src="image/icon3.png" /><p>Clothes &<br /> Accessories</p>
                                </div>
                            </li>
                            <li><div class="f-clist4"><img src="image/icon4.png" /><p>Sports & <br />Outdoor</p></div></li>
                            <li><div class="f-clist5"><img src="image/icon5.png" /><p>Health & <br />Beauty</p></div></li>
        </ul>
      </div>
    </div>   
  </section>
  <Carousel />
               
                <section class="section-category">
                    <div class="container">
                        <div class="row ">
                            <div class="col-lg-12">
                                <div class="deals-list">
                                    <h2 class="text-center">Categories</h2>
                                    <ul class="categories-link">
                                        <li>
                                            <a href="#">
                                                <div class="f-accesoories"><img src="image/1.png" /></div>
                                                <div class="daily-deals"><p>Daily Deals</p></div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="f-accesoories"><img src="image/2.png" /></div>
                                                <div class="daily-deals"><p>Fashion & Accessories</p></div>
                                            </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/3.png" /></div>
                                            <div class="daily-deals"><p>Computer & Accessories</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/4.png" /></div>
                                            <div class="daily-deals"><p>Beauty & Health</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/5.png" /></div>
                                            <div class="daily-deals"><p>Home & Garden</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/6.png" /></div>
                                            <div class="daily-deals"><p>Audio & Video</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/7.png" /></div>
                                            <div class="daily-deals"><p>Phones & GPS</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/8.png" /></div>
                                            <div class="daily-deals"><p>Games & Consoles</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/9.png" /></div>
                                            <div class="daily-deals"><p>Kids & Family</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/10.png" /></div>
                                            <div class="daily-deals"><p>Camera & Photos</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/11.png" /></div>
                                            <div class="daily-deals"><p>Sports & Outdoors</p></div>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <div class="f-accesoories"><img src="image/12.png" /></div>
                                            <div class="daily-deals"><p class="goods-apply">White Goods & Household Appliances</p></div>
                                        </a>
                                        </li>

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                <section class="g-ads">
                    <div class="container">
                        <div class="row ">
                            <div class="col-sm-12">
                                <div class="text-center">
                                    <img src="image/ad.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
        </>
    )
}