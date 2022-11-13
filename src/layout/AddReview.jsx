import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
// import Footer from '../layout/footer'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Footer from '../components/Footer';
import { AuthContext } from '../context/authProvider/AuthProvider';
import axios from 'axios';
import swal from 'sweetalert';
const aboutbg = require('./../assets/images/background/image-11.jpg');
const helpbg = require('./../assets/images/background/image-18.jpg');

const AddReview = () => {

    const { user } = useContext(AuthContext);
    const [reviewAll, setReviewAll] = useState([])

    useEffect(() => {
        getreviewss()
    }, [user])
    const getreviewss = async () => {

        axios.get(`http://localhost:7000/api/v1/review/myreview/${user?.email}`,)
            .then(res => {
                setReviewAll(res.data?.review)

                console.log(res)

            }).catch(err => {

            })
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    axios.delete(`http://localhost:7000/api/v1/review/reviews/${id}`,)
                        .then(res => {
                            getreviewss()


                            swal("Deleted!", "Your imaginary file has been deleted!", "success");

                        }).catch(err => {

                        })

                }
            });


    }

    return (
        <>
            <Header />



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
                                <li><span>Your Reviews:</span> {reviewAll.length} Items</li>

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

                                        {
                                            reviewAll.map(revi =>


                                            (

                                                <tr>

                                                    <td class="prod-column">
                                                        <div class="column-box">
                                                            <div class="prod-thumb">
                                                                <Link to={'/#'}><img src={revi?.servicepicture} alt="" /></Link>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>

                                                        <h5 class="prod-title">{revi?.servicename}</h5>

                                                    </td>
                                                    <td>
                                                        {revi?.ratings}
                                                    </td>
                                                    <td>
                                                        <p> {revi?.description.slice(0, 12)}...</p>
                                                    </td>
                                                    <td>
                                                        {revi?.createdAt?.slice(0, -14)}
                                                    </td>
                                                    <td>
                                                        <Link to={`/services/${revi?.serviceid}`} >edit</Link>
                                                        <button className='btn btn-danger' onClick={() => handleDelete(revi._id)}>delete</button>
                                                    </td>


                                                </tr>
                                            )
                                            )
                                        }


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