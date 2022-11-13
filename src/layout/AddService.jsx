import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import axios from 'axios';

import Header from '../components/Header';
import { AuthContext } from '../context/authProvider/AuthProvider';
const aboutbg = require('./../assets/images/background/image-11.jpg');

const AddService = () => {
    const { user } = useContext(AuthContext);
    const [serviceData, setServiceData] = useState({});
    const [imgPrev, setImgPrev] = useState("")

    const handleData = (e) => {
        const { name, value } = e.target;
        console.log(name)
        if (name == "picture") {
            const file = e.target.files[0];
            console.log(file)
            setImgPrev(file)


        } else {
            setServiceData({ ...serviceData, [name]: value })
        }
    }

    // console.log(serviceData)
    const createService = async (e) => {
        const formData = new FormData();

        formData.append("avatar", imgPrev);

        axios.post('http://localhost:7000/profile', formData)
            .then(res => {
                console.log(res.data?.result?.filename)
                const token = localStorage.getItem("service-review")

                axios.post('http://localhost:7000/api/v1/service/create', {
                    ...serviceData, email: user?.email, picture: `http://localhost:7000/${res.data?.result?.filename}`
                },
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
            }).catch(err => {

            })




    }
    return (
        <>
            <Header />




            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Add Service</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">add service</li>
                    </ul>
                </div>

            </section>

            {/* Sidebar Page Container */}
            <div class="sidebar-page-container">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            {/* News Block Two */}
                            <div class="news-block-two blog-single-post">
                                <div class="inner-box">
                                    <div class="lower-content">







                                        <div class="comment-form">
                                            <div class="group-title">
                                                <h3>Add a service</h3>
                                            </div>
                                            {/* Contact Form */}
                                            <div class="contact-form">
                                                <form id="contact-form" >
                                                    <div class="row clearfix">


                                                        <div class="col-md-12 form-group">
                                                            <input onChange={(e) => handleData(e)} type="text" name="title" placeholder="Enter Title here......" required="" />
                                                            <i class="fas fa-user"></i>
                                                        </div>

                                                        <div class="col-md-12 form-group">
                                                            <input onChange={(e) => handleData(e)} type="text" name="price" placeholder="Enter Price here......" required="" />
                                                            <i class="fas fa-envelope"></i>
                                                        </div>


                                                        <div class="col-md-12 form-group">
                                                            <textarea onChange={(e) => handleData(e)} name="description" placeholder="Enter description here......"></textarea>
                                                            <i class="fas fa-edit"></i>
                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <input onChange={(e) => handleData(e)} type="file" name="picture" placeholder="Type your website...." required="" />
                                                            <img src={imgPrev && URL.createObjectURL(imgPrev)} alt="" />

                                                        </div>

                                                        <div class="col-md-12 form-group">
                                                            <button class="theme-btn btn-style-one" type="button" onClick={createService} name="submit-form"><span class="btn-title">Submit</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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

export default AddService