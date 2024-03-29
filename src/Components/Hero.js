import React from 'react'
import bpr from '../images/bpr.jpg'
function Hero() {
    return (
        <div className='container-fluid'>
            <div className="row no-gutters">
                <div className="col-lg-6">
                    <div class="card custom-card mb-4">
                        <div class="card-body">
                            <div className='carousel-lg'>
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={bpr} alt="First slide" style={{ height: "350px" }} />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={bpr} alt="Second slide" style={{
                                                height: "350px"
                                            }} />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={bpr} alt="Second slide" style={{
                                                height: "350px"
                                            }} />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card custom-card mb-4">
                        <div class="card-body">
                            <div class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={bpr} alt="First slide" style={{ height: "350px" }} />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Additional carousel items --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 mb-1">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={bpr} alt="First slide" style={{
                                                    height: "116px"
                                                }} />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-12 mb-1">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={bpr} alt="First slide" style={{
                                                    height: "116px"
                                                }} />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-12 ">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={bpr} alt="First slide" style={{
                                                   height: "116px"
                                                }} />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Hero
