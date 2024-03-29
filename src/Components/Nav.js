import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import TopBar from './TopBar'
function Nav() {
    return (
        <>
            <TopBar />
            <nav class="navbar mr-auto navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 card">

                {/* <a class="navbar-brand d-flex align-items-center text-center py-5 m-2 px-5 px-lg-5" style={{
                }}>
                    <img src={Logo} alt="Amamaza Logo" height="100px" width="160px" />
                </a> */}

                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mr-auto p-4 p-lg-0">

                        <a class="nav-item nav-link active">Home</a>


                        <a class="nav-item nav-link" style={{
                            "white-space": "nowrap"
                        }}>Politics</a>


                        <a href="#" class="nav-item nav-link">Life</a>


                        <a class="nav-item nav-link">Games</a>

                        <a class="nav-item nav-link">Entertainment</a>


                        <a class="nav-item nav-link">Technology</a>

                        <a class="nav-item nav-link">Tourism</a>

                        <a class="nav-item nav-link">Economy</a>

                        <a class="nav-item nav-link">Fashion</a>
                        <a class="nav-item nav-link">Diaspora</a>
                        <a class="nav-item nav-link">Information</a>
                        {/* <a class="nav-item nav-link">People</a> */}









                    </div>
                </div>

            </nav></>
    )
}


export default Nav