import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authProvider/AuthProvider';
import Header from './Header'

const Login = () => {
    const { createUser, login, googleSignIn, setTokens,
        tokens, updateProfileUser } = useContext(AuthContext);
    const location = useLocation()

    const [imgPrev, setImgPrev] = useState("")

    const pathname = location.pathname;
    const loginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user, "google user");

                const currentUser = {
                    name: user?.displayName,
                    email: user?.email,
                    picture: user?.photoURL
                }

                axios.post('http://localhost:7000/api/v1/token/register', currentUser)
                    .then(res => {




                    }).catch(err => {

                    })

            })
            .catch(err => console.error(err));
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        if (pathname == "/login") {
            login(email, password)
                .then(result => {
                    const user = result.user;


                    const currentUser = {
                        email: user.email
                    }

                    axios.post('http://localhost:7000/api/v1/token/login', currentUser)
                        .then(res => {
                            console.log(res)
                            const token = res.data.token;
                            localStorage.setItem("service-review", JSON.stringify(token))
                            setTokens(token)
                        }).catch(err => {

                        })



                }
                )
                .catch(error => console.log(error));
        } else {


            createUser(email, password)
                .then(result => {
                    const user = result.user;



                    const formData = new FormData();

                    formData.append("avatar", imgPrev);

                    axios.post('http://localhost:7000/profile', formData)
                        .then(res => {
                            console.log(res.data?.result?.filename)
                            const profile = {
                                displayName: username, photoURL: `http://localhost:7000/${res.data?.result?.filename}`
                            }
                            updateProfileUser(profile)

                            const currentUser = {
                                name: username,
                                email: user.email,
                                picture: `http://localhost:7000/${res.data?.result?.filename}`
                            }

                            axios.post('http://localhost:7000/api/v1/token/register', currentUser)
                                .then(res => {




                                }).catch(err => {

                                })

                        })





                })
                .catch(err => console.error(err));
        }
    }
    console.log(pathname, "pathname")
    return (
        <>


            <div className="container" id='loginpage'>
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto">
                        <div class="sidebar-widget-two contact-form-widget">
                            <div class="inner-box">
                                <h3> {pathname == "/login" ? "Login" : "Register"} Form</h3>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form onSubmit={handleSignUp} id="contact-form">
                                        <div class="row clearfix">
                                            {pathname == "/register" && <div class="col-md-12 form-group">
                                                <input type="text" name="username" placeholder="Enter name here......" required="" />
                                                <i class="fal fa-user"></i>
                                            </div>}

                                            <div class="col-md-12 form-group">
                                                <input type="email" name="email" placeholder="Enter email here......" required="" />
                                                <i class="fal fa-envelope"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <input type="password" name="password" placeholder="Enter Password......" required="" />
                                                <i class="fal fa-lock"></i>
                                            </div>

                                            {pathname == "/register" &&
                                                <div class="col-md-12 form-group">
                                                    <input onChange={(e) => setImgPrev(e.target.files[0])} type="file" name="picture" placeholder="Type your website...." required="" />
                                                    <img src={imgPrev && URL.createObjectURL(imgPrev)} alt="" />

                                                </div>
                                            }
                                            <div class="col-md-12 form-group text-center">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Submit Now</span></button>
                                            </div>

                                        </div>
                                    </form>
                                    {pathname == "/login" ? <Link to={'/register'} className='text-center '> <h5 className='mt-3'>Don't have an account?Create Now!</h5></Link> :
                                        <Link to={"/login"} className='text-center '> <h5 className='mt-3'>Already have an account?Login Now!</h5></Link>}
                                </div>

                                <div class="widgets-section">
                                    <div class="row clearfix justify-content-center">







                                        <footer class="main-footer">
                                            <div class="auto-container">







                                                <div class="widget-content">

                                                    <ul class="social-links clearfix ">
                                                        <li><Link onClick={loginWithGoogle} ><span class="fab fa-google"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>


                                                        <li><Link to={'/#'}><span class="fab fa-github"></span></Link></li>
                                                    </ul>
                                                </div>












                                            </div>

                                        </footer>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login