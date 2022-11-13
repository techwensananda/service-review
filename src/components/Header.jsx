import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { AuthContext } from '../context/authProvider/AuthProvider'
import Menu from './Menu'
const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Bengli', label: 'Bengli' }
]
const Header = ({services}) => {
    const { user, logOut } = useContext(AuthContext);

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop) {
            headerRef.current.classList.add("fixed-header")
            menuRef.current.classList.add("animated slideInDown")
        } else {
            headerRef.current.classList.remove("fixed-header")
            menuRef.current.classList.remove("animated slideInDown")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc)
        return () => window.removeEventListener('scroll', headerFunc)
    }, [])

    function addFunc() {
        return document.body.classList.add("mobile-menu-visible");
    }
    function closeFunc() {
        return document.body.classList.remove("mobile-menu-visible");
    }
    return (
        <>
            <header ref={headerRef} class={"main-header"}>
                <div class="header-top">
                    <div class="auto-container">
                        <div class="inner">
                            <div class="top-left">


                                <div class="logo-box">
                                    <div class="logo "><Link to={'/#'}> <h1>Cogenhub</h1>  </Link></div>
                                </div>
                            </div>

                            <div class="top-middile">

                                <div class="contact-info">
                                    <div class="single-info">
                                        <div class="icon-box"><i class="flaticon-call-1"></i></div>
                                        <div class="text">Phone Number</div>

                                        <h4><Link to={'/tel:+98787687676"'}>+76767676767</Link></h4>
                                    </div>
                                    <div class="single-info">
                                        <div class="icon-box"><i class="flaticon-email-4"></i></div>
                                        <div class="text">Email Address</div>
                                        <h4><Link to={'mailto:info@webmail.com'}>info@webmail.com</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div class="top-right">
                                {
                                    user?.email ? <Link onClick={logOut} class="theme-btn btn-style-two"><span class="btn-title">Signout</span></Link>
                                        : <Link to={'/login'} class="theme-btn btn-style-two"><span class="btn-title">Login</span></Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>




                <div class="header-upper">
                    <div class="auto-container">
                        <div class="inner-container">


                            <div class="nav-outer clearfix">

                                <div class="mobile-nav-toggler"><span class="icon fal fa-bars" onClick={addFunc}></span></div>

                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <Menu services={services} />
                                </nav>



                                <ul class="social-links clearfix">
                                    <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div ref={menuRef} class={"sticky-header"}>
                    <div class="auto-container clearfix">

                        <div class="logo pull-left">
                            <Link to={'/#'} title=""> <h1>Cogenhub</h1></Link>
                        </div>

                        <div class="pull-right">
                            <nav class="main-menu clearfix">
                                <Menu />
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="mobile-menu">
                    <div class="menu-backdrop"></div>
                    <div class="close-btn"><span class="icon flaticon-cancel" onClick={closeFunc}></span></div>

                    <nav class="menu-box">
                        <div class="nav-logo"><Link to={'/#'}> <h1>Cogenhub</h1></Link></div>
                        <div class="menu-outer">
                            <Menu  />
                        </div>
                        <div class="social-links">
                            <ul class="clearfix">
                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-facebook-square"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>

                            </ul>
                        </div>
                    </nav>
                </div>

            </header>

        </>
    )
}

export default Header