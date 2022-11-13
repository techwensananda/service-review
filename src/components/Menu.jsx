import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authProvider/AuthProvider';

const Menu = ({ services }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                    <li class=""><Link to={'/'}>Home</Link>

                    </li>

                    <li class="dropdown"><Link to={'/services'}>Services</Link>
                        <ul>
                            {
                                services?.map(ser =>
                                    <li><Link to={`/services/${ser._id}`}>{ser?.title}</Link></li>

                                )
                            }

                        </ul>
                    </li>


                    {user?.email && <>  <li class=""><Link to={'/my-reviews'}>My reviews</Link>

                    </li>
                        <li class=""><Link to={'/add-service'}>Add service</Link>


                        </li>
                    </>}

                </ul>
            </div>

        </>
    )
}

export default Menu