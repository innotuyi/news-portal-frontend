import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import config from './Config';
import Nav from './Nav';
import TopNav from './TopBar';
import Advert from './Advert'
import Bpr from '../images/bpr.jpg'
import Footer from './Footer'

import { singleArticle } from '../actions/productAction';

function DetailPage() {
  const navigate = useNavigate();
  const articleDetails = useSelector((state) => state.articleDetails);
  const { error, article } = articleDetails;
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(singleArticle(slug));
  }, []);

  console.log("slug displyaed", slug, article)

  return (
    <div className="detail-page">
      <TopNav />
      <Nav />
      <div className="container mt-5">
        <div className="row">



          <div className="col-lg-9">
            <div className="card article-card">
              <div className="card-body">
                <h1 className="card-title article-title">{article.title}</h1>
                <div className="media author-section">
                  <img src={Bpr} className="mr-3" alt="Author" style={{ width: '350px' }} />
                  <div className="media-body">
                    <p className="mb-0">Author Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <p className="card-text article-content">
                 {article.content}
                </p>
              </div>
              <div className="card-footer author-section">
                <small className="text-muted">written By {article.author_name} On {article.created_at}</small>
              </div>
            </div>
          </div>


          <div className="col-lg-1">
            <div className="card social-media-card">
              <div className="card-body social-media-section">
                {/* Your social media icons and content here */}
                <div className="social-media-icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="social-media-icon">
                  <i className="fab fa-twitter"></i>
                </div>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>

          <Advert/>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default DetailPage;
