import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
      <>
          <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul class="navigation clearfix">
                  <li class=""><Link to={'/'}>Home</Link>
                     
                  </li>
              
                  <li class="dropdown"><Link to={'/services'}>Services</Link>
                      <ul>
                          <li><Link to={'/services-1'}>Services One</Link></li>
                          <li><Link to={'/services-2'}>Services Two</Link></li>
                          <li><Link to={'/services-details'}>Services Details</Link></li>
                      </ul>
                  </li>
                  
                 
                  <li class=""><Link to={'/my-reviews'}>My reviews</Link>
                     
                  </li>
                  <li class=""><Link to={'/add-service'}>Add service</Link>
                     
                  </li>

                 
              </ul>
          </div>

      </>
  )
}

export default Menu