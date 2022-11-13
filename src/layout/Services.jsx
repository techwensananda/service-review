import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
const aboutbg = require('./../assets/images/background/image-11.jpg');

const Services = () => {
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



            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Our Services</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Services</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}

            {/* <!-- News Section --> */}
            <section class="news-section">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- News Block One --> */}

                        {
                            services?.map((servic, index) =>
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
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Services