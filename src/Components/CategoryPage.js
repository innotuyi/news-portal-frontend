import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import TopStory from './TopStory'
import Top from './Top'
import Main from './MainStory'
import Advert from './Advert'
import bpr from '../images/bpr.jpg'
import Banner from '../images/banner-placeholder.png'
import Hero from './Hero'

function CategoryPage() {
    return (
        <>
            <Nav />
            <Hero/>
            
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-5">
                            <h5 class="card-title m-3 text-center">Top Stories</h5>
                            <div className='row'>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 " alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 " alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 " alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 " alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="col-md-5">
                            <h5 class="card-title m-3 text-center">Main Stories</h5>
                            <div className='row'>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 rounded-circle" alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3rounded-circle " alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 rounded-circle" alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <div class="card news-card news-card-1">
                                        <div class="card-body">
                                            <div class="media">
                                                <img src={bpr} class="mr-3 rounded-circle" alt="..." style={{
                                                    width: "74px",
                                                    height: "74px"
                                                }} />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Category</h5>
                                                    <p>Muhazi United yahembye abakinnyi amezi abiri, ihiga gutsinda APR FC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="col-md-2">
                            <h5 class="card-title m-4">Advertisement</h5>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="card banner-card">
                                        <div class="card-body">

                                            <img src={Banner} alt="Banner" className="img-fluid banner-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
                <Footer/>


            

        </>

    )
}

export default CategoryPage
