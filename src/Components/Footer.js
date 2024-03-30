import React from 'react'
import Banner from '../images/banner-placeholder.png'

import Footer1 from '../images/footer-1.jpg'
import Footer2 from '../images/footer-2.jpg'

function Footer() {
  return (
    <div>
        <div class="container-fluid bg-dark card">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-4 col-lg-6 col-xl-3">
                        <div class="footer-item-1">
                            <h4 class="mb-4 text-white">Get In Touch</h4>
                            <p class="text-secondary line-h">Address: <span class="text-white">Kigali, Rwanda</span></p>
                            <p class="text-secondary line-h">Email: <span class="text-white">test@gmail.com</span></p>
                            <p class="text-secondary line-h">Phone: <span class="text-white">+25078443939</span></p>
                            <div class="d-flex line-h">
                                <a class="btn btn-light me-2 btn-md-square rounded-circle" href=""><i class="fab fa-twitter text-dark"></i></a>
                                <a class="btn btn-light me-2 btn-md-square rounded-circle" href=""><i class="fab fa-facebook-f text-dark"></i></a>
                                <a class="btn btn-light me-2 btn-md-square rounded-circle" href=""><i class="fab fa-youtube text-dark"></i></a>
                                <a class="btn btn-light btn-md-square rounded-circle" href=""><i class="fab fa-linkedin-in text-dark"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-4 col-lg-6 col-xl-3 offset-md-1">
                        <div class="footer-item-2">
                            <div class="d-flex flex-column mb-4">
                                <h4 class="mb-4 text-white">Recent Posts</h4>
                                <a href="#">
                                    <div class="d-flex align-items-center pr-4">
                                        <div class="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img src={Footer1} class="img-zoomin img-fluid rounded-circle" alt="" style={{
                                               
                                            }} />
                                        </div>
                                        <div class="d-flex flex-column p-2">
                                            <p class="text-uppercase text-white mb-3">Life Style</p>
                                            <a href="#" class="h6 text-white">
                                                Get the best speak market, news.
                                            </a>
                                            <small class="text-white d-block"><i class="fas fa-calendar-alt me-1"></i> Dec 9, 2024</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column">
                                <a href="#">
                                    <div class="d-flex align-items-center">
                                        <div class="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img style={{
                                                
                                            }} src={Footer2} class="img-zoominimg-fluid rounded-circle" alt=""/>
                                        </div>
                                        <div class="d-flex flex-column p-2">
                                            <p class="text-uppercase text-white mb-3">Sports</p>
                                            <a href="#" class="h6 text-white">
                                                Get the best speak market, news.
                                            </a>
                                            <small class="text-white d-block"><i class="fas fa-calendar-alt me-1"></i> Dec 9, 2024</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-6 col-xl-3 offset-md-2">
                        <div class="d-flex flex-column text-start footer-item-3">
                            <h4 class="mb-4 text-white">Categories</h4>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Political</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Entetainment</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Life</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Diaspora</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Technology</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Tourism</a>
                            <a class="btn-link text-white" href=""><i class="fas fa-angle-right text-white me-2"></i> Economy</a>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer
