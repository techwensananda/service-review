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

const AddReview = () => {
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
                    <h1>My Reviews</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Reviews</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}
            {/* <!--Cart section--> */}
            <section class="cart-area">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <ul class="total-item-info">
                                <li><span>Your Reviews:</span> 3 Items</li>
                              
                            </ul>
                            <div class="table-outer">
                                <table class="cart-table">
                                    <thead class="cart-header">
                                        <tr>
                                            
                                            <th class="prod-column">Picture</th>
                                         
                                            <th>Name</th>
                                            <th class="availability">Rating</th>
                                            <th class="price">Description</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           
                                            <td  class="prod-column">
                                                <div class="column-box">
                                                    <div class="prod-thumb">
                                                        <Link to={'/#'}><img src={require('../assets/images/shop/1.jpg')} alt="" /></Link>
                                                    </div>
                                              
                                                </div>
                                            </td>
                                            <td>
                                              
                                                    <h5 class="prod-title">Power Remote</h5>
                                               
                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                <p> Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor</p> 
                                            </td>
                                            <td>
                                                22/08/2022
                                            </td>
                                           
                                           
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                  

                </div>
            </section>


            <Footer />
        </>
    )
}

export default AddReview