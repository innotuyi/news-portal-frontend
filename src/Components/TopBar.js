import React from 'react'
import Banner from '../images/banner-placeholder.png'
function TopBar() {
  return (
    <div className='topbar'>
       <div class="row">
        <div class="col-lg-4">
          <div className="test">
            <a href="#" class="nav-item nav-link">

              <img src={Banner} alt="Banner" className='img-fluid' style={
                {

                  "height": "80px",
                  "width":"900px"
                }
              } />
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <a href="#" class="nav-item nav-link">

            <img src={Banner} alt="Banner" className='img-fluid' style={
              {

                "height": "80px",
                "width": "auto"
              }
            } />
          </a>
        </div>
        <div class="col-lg-4">
          <a href="#" class="nav-item nav-link">

            <img src={Banner} alt="Banner" className='img-fluid' style={
              {

                "height": "80px",
                "width": "auto"
              }
            } />
          </a>
        </div>


    </div>
    </div>
     
  )
}

export default TopBar
