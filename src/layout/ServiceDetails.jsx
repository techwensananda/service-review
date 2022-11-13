import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

// import Footer from '../layout/footer'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Footer from '../components/Footer';
import axios from 'axios';
import { AuthContext } from '../context/authProvider/AuthProvider';
import { toast } from 'react-toastify';

const aboutbg = require('./../assets/images/background/image-11.jpg');
const helpbg = require('./../assets/images/background/image-18.jpg');

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);

    const { id } = useParams();
    const [services, setServises] = useState({})
    const [reviewData, setReviewData] = useState({})
    const [reviewAll, setReviewAll] = useState([
        { ratings: "1" }
    ])

    const thirdExample = {
        size: 40,
        count: 7,
        isHalf: false,
        value: 1,
        color: "blue",
        activeColor: "red",
        onChange: newValue => {
            setReviewData({ ...reviewData, ratings: newValue });
        }
    };



    useEffect(() => {

        allReviewSS()


    }, [id])

    const allReviewSS = async () => {
        await axios.get(`http://localhost:7000/api/v1/review/reviews/${id}`,)
            .then(res => {
                setReviewAll(res.data.review)


            }).catch(err => {

            })
    }
    useEffect(() => {

        getreviewss()


    }, [id])


    const getreviewss = async () => {

        axios.get(`http://localhost:7000/api/v1/service/services/${id}`,)
            .then(res => {
                setServises(res.data?.service)
            }).catch(err => {

            })
    }

    const postReview = async () => {
        console.log(reviewData)
        await axios.post(`http://localhost:7000/api/v1/review/create/${id}`, {
            ...reviewData, email: user?.email
        })
            .then(res => {
                allReviewSS()
                toast.success("successfully post a review")

            }).catch(err => {

            })
    }
    return (
        <>
            <Header />



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
                                <div class="image-box"><img src={services?.picture} alt="" /></div>
                                <div class="content">
                                    <div class="sec-title">

                                        <h2>{services?.title}</h2>

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
                                                <div class="price"><span>${services?.price}</span> <del>$799</del></div>
                                                <div class="text">{services?.description}</div>
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

                                                    {
                                                        reviewAll.map(rev => {
                                                            return <div class="column">
                                                                <div class="single-review-box">
                                                                    <div class="image-holder">
                                                                        <img src={rev?.userpicture} alt="Awesome " />
                                                                    </div>
                                                                    <div class="text-holder">
                                                                        <div class="top">
                                                                            <div class="name">
                                                                                <h3>{rev?.username}<span>– {rev?.createdAt?.slice(0, -14)}</span></h3>
                                                                            </div>
                                                                            <div class="review-box">
                                                                                <div class="rating">
                                                                                    {

                                                                                    }
                                                                                    <i class="fa fa-star"></i>
                                                                                    <i class="fa fa-star"></i>
                                                                                    <i class="fa fa-star"></i>
                                                                                    <i class="fa fa-star"></i>
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text">
                                                                            <p>{rev?.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }

                                                </div>
                                            </div>
                                            <div class="review-form">
                                                <div class="shop-page-title">
                                                    <div class="title">Add Your <span>Comments</span></div>
                                                    <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                </div>

                                                <form id="review-form" >

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="add-rating-box">
                                                                <div class="add-rating-title">
                                                                    <h4>Your Rating</h4>
                                                                </div>
                                                                <div class="review-box">
                                                                    <ReactStars {...thirdExample} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="input-box">
                                                                <p>Your Review<span>*</span></p>
                                                                <textarea onChange={(e) => setReviewData({ ...reviewData, description: e.target.value })} name="review" placeholder="" required=""></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <button class="theme-btn btn-style-one" type="button" onClick={postReview}><span class="btn-title">Submit</span></button>
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

export default ServiceDetails