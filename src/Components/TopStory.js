import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import config from './Config';
import bpr from '../images/bpr.jpg'
import Banner from '../images/banner-placeholder.png'
import { listArticles } from '../actions/productAction';

const APP_URL = config.apiUrl;


function TopStory() {

    const articleLists = useSelector((state) => state.articleLists);
    const { error, articles } = articleLists;
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(listArticles());
    }, []);

    const details = (id) => {
        navigate(`/news/${id}`);
    };


    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <h5 class="card-title m-3 text-center">Top Stories</h5>
                        <div className='row'>
                            {articles.map(article => (
                                <div key={article.id} className="col-md-12 mb-2">
                                    <button class="" onClick={(e) => details(article.slug)}>
                                    <div className="card news-card news-card-1">
                                        <div className="card-body">
                                            <div className="media">
                                                <img src={bpr} className="mr-3" alt="Article Thumbnail" style={{ width: "74px", height: "74px" }} />
                                                <div className="media-body">
                                                    <h5 className="mt-0">{article.category_name}</h5>
                                                    <p>{article.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </button>
                                </div>
                            ))}

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
                    <div className="col-md-4">
                        <h5 class="card-title m-3 text-center">Main Stories</h5>
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


        </>
    )
}

export default TopStory
