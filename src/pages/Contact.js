import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

export default function Contact() {
    return (
        <>
        <Header />
        <section  class="contact-us inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title  text-center">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class=" section-overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-form">
                        <form action="#">
                            <div class="form-group">
                                <input type="text" placeholder="Full Name" class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email Address" class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Subject" class="form-control" />
                            </div>
                            <div class="form-group">
                                <textarea name="review" cols="30" rows="6" placeholder="Message" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="submit-form">Submit Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-3">
                    <div class="single-widget-right">
                        <h2>Address</h2>
                        <div class="widget-body">

                            <ul class="get-touch">
                                <li>
                                    <p><i class="fa fa-map-marker"></i> Lorem ipsum doloer sited amet sited amet</p>
                                </li>
                                <li> <a href="mailTo:wolfpack@gmail.com" class="cf_email"><i class="fa fa-envelope"></i> wolfpack.com</a></li>
                                <li> <a href="tel:778895448" class="cf_email"><i class="fa fa-phone"></i> 778895448</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="maparea">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29213.038296132225!2d90.39150904197642!3d23.760577791538438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c783c3404f0d%3A0x76ae0d2edabc81df!2sHatir+Jheel!5e0!3m2!1sen!2sbd!4v1517941663187"></iframe>
    </div>
        <Footer />
        </>
    )
}