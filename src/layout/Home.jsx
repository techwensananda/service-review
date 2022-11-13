import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/slider.css';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../components/Header';
import axios from 'axios';

const teambg1 = require('./../assets/images/background/image-3.jpg');
const newsbg1 = require('./../assets/images/background/image-4.jpg');
const wellcomebg1 = require('./../assets/images/resource/image-1.jpg');
const Home = () => {
    const slides = [
        {
            title: 'Making Your Business Idea',
            description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
            btnLearn: "-- Learn More --",
            finan: "Coen",
            dox: "hub",
            btnService: "-- Our Services --",
            image: require('../assets/images/main-slider/1.jpg'),
        },
        {
            title: 'Making Your Business Idea',
            description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
            btnLearn: "-- Learn More --",
            finan: "Coen",
            dox: "hub",
            btnService: "-- Our Services --",
            image: require('../assets/images/main-slider/1.jpg'),
        },
        {
            title: 'Making Your Business Idea',
            description: 'Our company is one of the world’s leading management consulting firms. Get in touch here asap.',
            btnLearn: "-- Learn More --",
            finan: "Coen",
            dox: "hub",
            btnService: "-- Our Services --",
            image: require('../assets/images/main-slider/1.jpg'),
        },

    ];


    const [services, setServises] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/api/v1/service/services',)
            .then(res => {
                setServises(res.data?.service)

            }).catch(err => {

            })
    }, [])
    console.log(services)

    return (
        <>
            <Header services={services} />




            <Slider className="slider-wrapper" autoplay >
                {slides.map((slide, index) =>
                    <div key={index} className="slider-content " style={{ background: `url('${slide.image}') no-repeat center center` }}>
                        <div className="inner">
                            <h1>{slide.title}</h1>
                            <h2>{slide.finan}<span>{slide.dox} </span></h2>
                            <div class="text">{slide.description}</div>
                            <div class="btn-box">
                                <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{slide.btnService}</span>
                                </Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">{slide.btnLearn}</span></Link></div>
                        </div>
                    </div>)}
            </Slider>



            {/* <!-- Welcome Setion --> */}
            <section class="welcome-section pt-0">
                <div class="auto-container">
                    <div class="wrapper-box">
                        <div class="row m-0">
                            {/* <!-- Welcome Block One --> */}
                            <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                    <h2>Business Analysis</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                    <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                </div>
                            </div>
                            {/* <!-- Welcome Block One --> */}
                            <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box" style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}>
                                    <div class="icon-box"><span class="flaticon-tax"></span></div>
                                    <h2>Save Your Tax</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                    <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                </div>
                            </div>
                            {/* <!-- Welcome Block One --> */}
                            <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                    <h2>Business Analysis</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                    <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- About Section --> */}
            <section class="about-section">
                <div class="auto-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../assets/images/resource/image-2.jpg')} alt="" />
                                </div>
                                <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="caption">F.</div>
                                    <div class="image-outer"><img src={require('../assets/images/resource/image-3.jpg')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="content-box">
                                <div class="sec-title">
                                    <div class="sub-title">About Us</div>
                                    <h2>We Work With <br />You To Address</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                </div>
                                <div class="row">
                                    <div class="info-column col-md-6">
                                        <div class="icon-box">
                                            <div class="icon"><img src={require('../assets/images/icons/icon-1.png')} alt="" /></div>
                                            <h5>Phone Number</h5>
                                            <h2>+7676767676</h2>
                                        </div>
                                    </div>
                                    <div class="info-column col-md-6">
                                        <div class="icon-box">
                                            <div class="icon"><img src={require('../assets/images/icons/icon-2.png')} alt="" /></div>
                                            <h5>Email Address</h5>
                                            <h2>info@webmail.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- News Section --> */}
            <section class="news-section">
                <div class="sec-bg" style={{ backgroundImage: "url(" + newsbg1 + ")" }}></div>
                <div class="auto-container">
                    <div class="sec-title text-center light">
                        <div class="sub-title">Service</div>
                        <h2>Our Services</h2>
                    </div>
                    <div class="row">
                        {/* <!-- News Block One --> */}

                        {
                            services?.slice(0, 3).map((servic, index) =>
                                <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={servic?.picture} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <ul class="pt-3 post-meta justify-content-between d-flex">

                                                <ul>  <li><Link to={'/#'}><i class="far fa-dollar-sign"></i> {servic?.price}</Link></li>
                                                </ul>
                                                <ul className='d-flex'>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>

                                                </ul>
                                            </ul>
                                            <h3><Link to={'/blog-details'}>{servic?.title}</Link></h3>
                                            <div class="text">{servic?.description.slice(1, 100)}{servic.description.length > 100 && "..."}</div>

                                            <div class="col-md-12 form-group">
                                                <Link to={`/services/${servic._id}`} class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get Details</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* <!-- News Block One --> */}


                    </div>
                    <div className="text-center">
                        <Link to={`/services`} class="theme-btn btn-style-one " type="submit" name="submit-form"><span class="btn-title">All Service</span></Link>
                    </div>
                    
                </div>
              
            </section>





            {/* <!-- Why Choose Us Section --> */}
            <section class="why-chooseus-section">
                <div class="auto-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="content-box">
                                <div class="sec-title">
                                    <div class="sub-title">Why Choose Us</div>
                                    <h2>Why Should You <br />Choose Us ?</h2>
                                </div>
                                <Tab.Container defaultActiveKey="first">
                                    <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><span>Our Mission</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><span>Our Vission</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><span>Our Value</span></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="tabs-content">
                                        <Tab.Pane eventKey="first" className="fadeInUp animated">
                                            <div class="clearfix">
                                                <div class="image"><img src={require('../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="fadeInUp animated">
                                            <div class="clearfix">
                                                <div class="image"><img src={require('../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="fadeInUp animated">
                                            <div class="clearfix">
                                                <div class="image"><img src={require('../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>



                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one"><img src={require('../assets/images/resource/image-6.jpg')} alt="" /></div>
                                <div class="image-two"><img src={require('../assets/images/resource/image-5.jpg')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


















            <Footer />
        </>
    )
}

export default Home