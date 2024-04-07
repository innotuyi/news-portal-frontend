import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

    
    ARTICLE_REQUEST,
    ARTICLE_SUCCESS,
    ARTICLE_FAIL,

    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAIL,

    PRINTING_REQUEST,
    PRINTING_SUCCESS,
    PRINTING_FAIL,

    BRANDING_REQUEST,
    BRANDING_SUCCESS,
    BRANDING_FAIL,

    DESIGNING_REQUEST,
    DESIGNING_SUCCESS,
    DESIGNING_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,


  } from "../actions/types";


  export const propertiesListReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
      case PRODUCT_REQUEST:
        return { loading: true, properties: [] };
      case PRODUCT_SUCCESS:
        return { 
          properties: action.payload, 
        };
  
      case PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const articleReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
      case ARTICLE_REQUEST:
        return { loading: true, articles: [] };
  
      case ARTICLE_SUCCESS:
        return { loading: false,articles: action.payload };
  
      case ARTICLE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  
  export const articleDetailsReducer = (state = { article: [] }, action) => {
    switch (action.type) {
      case ARTICLE_DETAILS_REQUEST:
        return { loading: true, article: [] };
  
      case ARTICLE_DETAILS_SUCCESS:
        return { loading: false, article: action.payload };
  
      case ARTICLE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };


  // export const productDetailsReducer = (state = { product: [] }, action) => {
  //   switch (action.type) {
  //     case PRODUCT_DETAILS_REQUEST:
  //       return { loading: true, product: [] };
  
  //     case PRODUCT_DETAILS_SUCCESS:
  //       return { loading: false,product: action.payload };
  
  //     case PRODUCT_DETAILS_FAIL:
  //       return { loading: false, error: action.payload };
  
  //     default:
  //       return state;
  //   }
  // };




  export const printingFilterReducer = (state = { printing: [] }, action) => {
    switch (action.type) {
      case PRINTING_REQUEST:
        return { printingLoading: true, printing: [] };
      case PRINTING_SUCCESS:
        return { 
          printing: action.payload, 
        };
  
      case PRINTING_FAIL:
        return { printingLoading: false, printingError: action.payload };
      default:
        return state;
    }
  };

  export const brandingFilterReducer = (state = { branding: [] }, action) => {
    switch (action.type) {
      case BRANDING_REQUEST:
        return { brandingLoading: true, branding: [] };
      case BRANDING_SUCCESS:
        return { 
          branding: action.payload, 
        };
  
      case BRANDING_FAIL:
        return { brandingLoading: false, brandingError: action.payload };
      default:
        return state;
    }
  };


  export const designingFilterReducer = (state = { designing: [] }, action) => {
    switch (action.type) {
      case DESIGNING_REQUEST:
        return { designingLoading: true, designing: [] };
      case DESIGNING_SUCCESS:
        return { 
          designing: action.payload, 
        };
  
      case DESIGNING_FAIL:
        return { designingLoading: false, designingError: action.payload };
      default:
        return state;
    }
  };

 