import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
// import Footer from '../layout/footer'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Footer from '../components/Footer';

const aboutbg = require('./../assets/images/background/image-11.jpg');
const helpbg = require('./../assets/images/background/image-18.jpg');

const serviceDetails = () => {
    return (
        <>
            <Header />

            {/* <!--Search Popup--> */}
            <div id="search-popup" class="search-popup">
                <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                <div class="popup-inner">
                    <div class="overlay-layer"></div>
                    <div class="search-form">
                        <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                            <div class="form-group">
                                <fieldset>
                                    <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                    <input type="submit" value="Search Now!" class="theme-btn" />
                                </fieldset>
                            </div>
                        </form>
                        <br />
                        <h3>Recent Search Keywords</h3>
                        <ul class="recent-searches">
                            <li><Link to={'/#'}>Finance</Link></li>
                            <li><Link to={'/#'}>Idea</Link></li>
                            <li><Link to={'/#'}>Service</Link></li>
                            <li><Link to={'/#'}>Growth</Link></li>
                            <li><Link to={'/#'}>Plan</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Services Details</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">Services Details</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}


            {/* <!-- Sidebar Page Container --> */}
            <div class="sidebar-page-container">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-lg-4">
                            <aside class="sidebar">
                                {/* <!-- Category Widget --> */}
                                <div class="sidebar-widget-two categories-widget-two">
                                    <div class="widget-content">
                                        <ul>
                                            <li><Link to={'/services-details'}>Financial Planning <i class="fa fa-angle-right"></i></Link></li>
                                            <li class="current"><Link to={'/services-details'}>Software & Research <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to={'/services-details'}>Business Services <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to={'/services-details'}>Quality Resourcing <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to={'/services-details'}>Travel and Aviation <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to={'/services-details'}>Healthcare Services <i class="fa fa-angle-right"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                              
                                <div class="sidebar-widget-two contact-info-widget">
                                    <div class="inner-box" style={{ backgroundImage: "url(" + helpbg + ")" }}>
                                        <h3>Need Help?</h3>
                                        <ul>
                                            <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                            <li><Link to={'/tel:+98787676576'}>+987 876 765 76</Link></li>
                                            <li><Link to={'/mailto:support.example.com'}>support.example.com</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </aside>
                        </div>
                        <div class="col-lg-8">
                            <div class="services-details pl-lg-5">
                                <div class="image-box"><img src={require('../assets/images/resource/service-1.jpg')} alt="" /></div>
                                <div class="content">
                                    <div class="sec-title">
                                    
                                        <h2>We Support Our Clients Five <br /> Working Days.</h2>
                                        
                                    </div>
                                 
                                    <div class="cart-wrapper single-shop-area">
                                        <div class="cart-wrapper ">
                                            <div className="">
                                                <div class="top-content">
                                                    <div class="category">Business, UX Design</div>
                                                    <div class="review">
                                                        <span>(200+ Reviews)  </span>
                                                        <div class="rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="price"><span>$600</span> <del>$799</del></div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto . Lorem ipsum dolor sit amet, consectetur adipisicing elit,.</div>
                                                <div class="cart-btn">
                                                    <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Buy Now</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                </div>
                             
                              
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-tab-box tabs-box">
                                <Tab.Container defaultActiveKey="third">
                                  
                                    <Tab.Content className="tabs-content">
                                        <Tab.Pane eventKey="first">
                                            <div class="product-details-content">
                                                <div class="desc-content-box">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in reprehenderit.</p>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div class="product-details-content">
                                                <div class="desc-content-box">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in reprehenderit.</p>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div class="review-box-holder">
                                                <div class="review-area">
                                                    {/* <!--Start single review box--> */}
                                                    <div class="column">
                                                        <div class="single-review-box">
                                                            <div class="image-holder">
                                                                <img src={require('../assets/images/shop/review-1.png')} alt="Awesome " />
                                                            </div>
                                                            <div class="text-holder">
                                                                <div class="top">
                                                                    <div class="name">
                                                                        <h3>Steven Rich <span>– Jan 17, 2020:</span></h3>
                                                                    </div>
                                                                    <div class="review-box">
                                                                        <div class="rating">
                                                                            <i class="fa fa-star"></i>
                                                                            <i class="fa fa-star"></i>
                                                                            <i class="fa fa-star"></i>
                                                                            <i class="fa fa-star"></i>
                                                                            <i class="fa fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>Value for money , I use it from long time and it is very useful and good product.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--End single review box--> */}
                                                    {/* <!--Start single review box--> */}
                                                    <div class="column">
                                                        <div class="single-review-box">
                                                            <div class="image-holder">
                                                                <img src={require('../assets/images/shop/review-2.png')} alt="Awesome " />
                                                            </div>
                                                            <div class="text-holder">
                                                                <div class="top">
                                                                    <div class="name">
                                                                        <h3>William Cobus <span>– Jan 17, 2020:</span></h3>
                                                                    </div>
                                                                    <div class="rating">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>We denounce with righteous indignation and dislike men who are so beguiled & demoralized.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--End single review box--> */}
                                                </div>
                                            </div>
                                            <div class="review-form">
                                                <div class="shop-page-title">
                                                    <div class="title">Add Your <span>Comments</span></div>
                                                    <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                </div>
                                                <form id="review-form" action="#">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="input-box">
                                                                <p>Name<span>*</span></p>
                                                                <input type="text" name="fname" placeholder="" required="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="input-box">
                                                                <p>Email<span>*</span></p>
                                                                <input type="email" name="email" placeholder="" required="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="add-rating-box">
                                                                <div class="add-rating-title">
                                                                    <h4>Your Rating</h4>
                                                                </div>
                                                                <div class="review-box">
                                                                    <ul>
                                                                        <li><i class="fa fa-star"></i></li>
                                                                        <li><i class="fa fa-star"></i></li>
                                                                        <li><i class="fa fa-star"></i></li>
                                                                        <li><i class="fa fa-star"></i></li>
                                                                        <li><i class="fa fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="input-box">
                                                                <p>Your Review<span>*</span></p>
                                                                <textarea name="review" placeholder="" required=""></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <button class="theme-btn btn-style-one" type="submit"><span class="btn-title">Submit</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div class="tabs-content">
                                    <div class="tab">

                                    </div>
                                    <div class="tab active-tab" >

                                    </div>
                                    <div class="tab">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          


            <Footer />
        </>
    )
}

export default serviceDetails