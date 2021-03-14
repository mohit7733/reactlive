import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link as NavLink } from 'react-router-dom';

export default function Footer(){
    
    return(
        <>
         <section class="footer-area overlay" >
        <div class="footer-widget-area">
            <div class="container">
                <div class="row">
               
                    <div class="col-lg-2 col-md-6">
                        <div class="single-footer-widget">
                            <h2>PesaBee</h2>
                            <div class="widget-body">
                                <ul class="social-list p-l-25">
                                <li><NavLink to='/About'>About Us</NavLink></li>
                                <li><NavLink to='/Contact'>Contact Us</NavLink></li>
                                <li><NavLink to='/Blog'>Blogs</NavLink></li>
                                <li><NavLink to='/'>New Features</NavLink></li>
                                <li><NavLink to='/'>Categories A to Z</NavLink></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                       <div class="col-lg-3 col-md-6">
                        <div class="single-footer-widget">
                            <h2>Learn More</h2>
                            <div class="widget-body">
                                <ul class="social-list p-l-25">
                                <li><NavLink to='/'>Get Started</NavLink></li>
                                <li><NavLink to='/'>Safe Shopping</NavLink></li>
                                <li><NavLink to='/Membership'>Membership</NavLink></li>
                                <li><NavLink to='/'>Frequently Asked Questions</NavLink></li>
                                <li><NavLink to='/Privacy'>Policies & Privacy</NavLink></li>
                                <li><NavLink to='/Terms'>Terms & Condition</NavLink></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                       <div class="col-lg-3 col-md-6">
                        <div class="single-footer-widget">
                            <h2>Shops & Advertisers</h2>
                            <div class="widget-body">
                                <ul class="social-list p-l-25">
                                <li><NavLink to='/'>Why Pesabee?</NavLink></li>
                                <li><NavLink to='/'>Register Your Shop</NavLink></li>
                                <li><NavLink to='/'>Merchant Dashboard</NavLink></li>
                                <li><NavLink to='/'>Advertising</NavLink></li>
                                <li><NavLink to='/'>Widgets</NavLink></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                  <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h2>Get the mobile app</h2>
                            <div class="widget-body">
                                <div class="appli-gmail">
                                <NavLink href="#" class="footer-logo">
                                <img src="image/playstore.png" alt="" />
                                  </NavLink>
                                  <NavLink href="#" class="apple-link">
                                    <img src="image/apple.png" />
                                </NavLink>
                               </div> 
                               <h3 class="subscribe">Subscribe our Newsletter</h3>
                               <div class="text-search" id="text-search">
                                <input type="text" name="" class="form-control" placeholder="Email address" />
                                <button class="btn job-search">Subscribe</button>
                                </div>
                                
                            </div>
                            <div class=" follow-us">
                            <div class="row">
                            <div class="col-sm-12">
                            <div class="social-icons">
                                <span>Follow Us:</span>
                                <ul class="social-comobs">
                                    <li >
                                        <NavLink href="https://www.facebook.com/" title="Facebook" target="_blank" class="fb"><i class="fa fa-facebook" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                    <li >
                                        <NavLink href="https://twitter.com/" title="Twitter" target="_blank" class="tweets"><i class="fa fa-twitter" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                    <li >
                                        <NavLink href="https://www.instagram.com/" title="Pinterest" target="_blank" class="instag"><i class="fa fa-instagram" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                    <li >
                                        <NavLink href="https://in.linkedin.com/" title="Youtube" target="_blank" class="link-in"><i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
   </section>
    <div class="prperty-lane">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-left">
                    <p class="all-rights">&copy; <span id="newyear"></span><NavLink to='/' ><span class="website-n">PesaBee.</span></NavLink> All Rights Reserved</p>
                </div>
                <div class="col-lg-6 text-right">
                    <p class="all-rights">Website by : <NavLink to='http://sdssoftwares.co.uk/'  target="_blank" class="all-rights"><span>sdssoftwares.co.uk</span></NavLink></p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}