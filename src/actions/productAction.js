import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

    ARTICLE_REQUEST,
    ARTICLE_SUCCESS,
    ARTICLE_FAIL,

    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAIL

    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL

  } 
  from "../actions/types";

import config from '../Components/Config'

 import axios from "axios";

 const  APP_URL = config.apiUrl


  export const listProducts = () => async (dispatch) => {
    try {
      
      dispatch({ type: PRODUCT_REQUEST });
  
      const response = await axios.get(
        `${APP_URL}/api/jobs`
      );
  
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: PRODUCT_FAIL, payload: error });
      console.log("error:", error);
    }
  };
  

  export const listArticles = () => async (dispatch) => {
    try {
      dispatch({ type: ARTICLE_REQUEST });
      const response = await axios.get(`${APP_URL}/articles`);
      dispatch({ type: ARTICLE_SUCCESS, payload: response.data });
      console.log('all data', response.data)
    } catch (error) {
      dispatch({ type: ARTICLE_FAIL, payload: error });
    }
  };

  export const singleArticle = (slug) => async (dispatch) => {
    try {
      dispatch({ type: ARTICLE_DETAILS_REQUEST });
  
      const response = await axios.get(
        `${APP_URL}/articles/${slug}`
      );  
      dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ARTICLE_DETAILS_FAIL, payload: error });
    }
  };


  // export const singleProduct = (id) => async (dispatch) => {
  //   try {
  //     dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
  //     const response = await axios.get(
  //       `${APP_URL}/api/products/${id}`
  //     );
  //     console.log("Troubleshoot products data", response.data)
  
  //     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: response.data });
  //   } catch (error) {
  //     dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
  //   }
  // };