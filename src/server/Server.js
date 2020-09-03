import EndPoint from "./EndPoint";
const axios = require('axios');

export const getProducts = (businessSlug) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.BUSINESS + businessSlug + EndPoint.PRODUCTS)
)

export const getProductDetails = (productSlug) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.PRODUCTS + productSlug)
)

export const getBusiness = (businessSlug) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.BUSINESS + businessSlug)
)

export const getCollections = (businessSlug) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.BUSINESS + businessSlug + EndPoint.COLLECTIONS)
)

export const getCollectionDetails = (collectionSlug) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.COLLECTIONS + collectionSlug)
)

export const postOrderDetails = (orderDetails) => (
  axios.post(EndPoint.APP_BASE_URL + EndPoint.ORDERS, orderDetails)
)

export const getOrderDetails = (orderId) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.ORDERS + orderId)
)

