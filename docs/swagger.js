import {
  signUp,
  signIn,
  logout,
  generateTokens,
  forgotPassword,
  resetPassword,
  changePassword
} from './auth.swagger';

import {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} from './category.swagger';

import {
  getAllEvent,
  getEvent,
  createEvent,
  updateEvent,
  updateEventCoverImage,
  deleteEvent
} from './event.swagger';

import { getAds, addAds, updateAds, deleteAds } from './ads.swagger';

import {
  getAllGenre,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre
} from './genre.swagger';

import {
  getAllFaq,
  getFaq,
  getAdsByAdmin,
  addFaq,
  updateFaq,
  deleteFaq
} from './faq.swagger';

import {
  getAllProducts,
  getProduct,
  addProduct,
  top5Cheap,
  productStats,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize
} from './product.swagger';

import {
  getCart,
  addItemsToCart,
  increaseProductQuantityByOne,
  reduceProductQuantityByOne,
  deleteProductFromCart,
  deleteCart
} from './cart.swagger';

import {
  getAllProductReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} from './review.swagger';

import {
  getAllUsers,
  getUser,
  addUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} from './user.swagger';

import {
  createNewOrder,
  getAllOrders,
  getOrder,
  orderStatus,
  cancelOrder
} from './order.swagger';

import {
  addFavoriteProduct,
  deleteProductFromFavorite,
  checkProductInFavoriteList,
  getFavoriteList
} from './favorite.swagger';

import {
  verifyDiscountCode,
  getDiscount,
  getAllDiscountCodes,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.swagger';

const docs = {
  openapi: '3.0.0',
  info: {
    title: 'Mazaji API',
    description: 'An API for mazaji works built using NodeJS & MongoDB',
    version: '3.0.0',
    contact: {
      name: 'Rajan Pathak',
      email: 'pathakrajan0@gmail.com',
      url: ''
    }
  },
  servers: [
    {
      url: 'https://mazaji.herokuapp.com/api-docs',
      description: 'Production Server'
    },
    {
      url: 'http://localhost:8000/api',
      description: 'Development Server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        in: 'header',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      jwt: []
    }
  ],
  paths: {
    '/auth/login': {
      post: signIn
    },
    '/auth/register': {
      post: signUp
    },
    '/auth/logout': {
      post: logout
    },
    '/auth/tokens': {
      post: generateTokens
    },
    '/auth/forgot-password': {
      post: forgotPassword
    },
    '/auth/reset-password': {
      post: resetPassword
    },
    '/auth/change-password': {
      patch: changePassword
    },
    '/user': {
      get: getAllUsers,
      post: addUser
    },
    '/user/{userId}': {
      get: getUser,
      delete: deleteUser
    },
    '/user/update-details': {
      patch: updateUserDetails
    },
    '/user/update-profile-image': {
      patch: updateUserProfileImage
    },
    '/user/me': {
      delete: deleteMyAccount
    },
    '/category': {
      get: getAllCategories,
      post: addCategory
    },
    '/category/{categoryId}': {
      get: getCategory,
      patch: updateCategoryDetails,
      delete: deleteCategory
    },
    '/category/{categoryId}/image': {
      patch: updateCategoryImage
    },
    '/event': {
      get: getAllEvent,
      post: createEvent
    },
    '/event/{id}': {
      get: getEvent,
      patch: updateEvent,
      delete: deleteEvent
    },
    '/event/{eventId}/cover-image': {
      patch: updateEventCoverImage
    },
    '/genre': {
      get: getAllGenre,
      post: createGenre
    },
    '/genre/{id}': {
      get: getGenre,
      patch: updateGenre,
      delete: deleteGenre
    },
    '/faq': {
      get: getAllFaq,
      post: addFaq
    },
    '/ads': {
      get: getAdsByAdmin,
      post: addAds
    },
    '/ads/get': {
      get: getAds
    },
    '/ads/{id}': {
      patch: updateAds,
      delete: deleteAds
    },
    '/faq/{id}': {
      get: getFaq,
      patch: updateFaq,
      delete: deleteFaq
    },
    '/product': {
      get: getAllProducts,
      post: addProduct
    },
    '/product/{productId}': {
      get: getProduct,
      delete: deleteProduct
    },
    '/product/top-5-cheap': {
      get: top5Cheap
    },
    '/product/product-stats': {
      get: productStats
    },
    '/product/{productId}/details': {
      patch: updateProductDetails
    },
    '/product/{productId}/main-image': {
      patch: updateProductMainImage
    },
    '/product/{productId}/images': {
      patch: updateProductImages
    },
    '/product/color/{productId}': {
      post: addProductColor,
      delete: deleteProductColor
    },
    '/product/size/{productId}': {
      post: addProductSize,
      delete: deleteProductSize
    },
    '/favorite': {
      get: getFavoriteList,
      post: addFavoriteProduct
    },
    '/favorite/{productId}': {
      delete: deleteProductFromFavorite
    },
    '/favorite/check/{productId}': {
      get: checkProductInFavoriteList
    },
    '/discount': {
      get: getAllDiscountCodes
    },
    '/discount/verify': {
      post: verifyDiscountCode
    },
    '/discount/cancel': {
      delete: cancelDiscountCode
    },
    '/discount/find': {
      get: getDiscount
    },
    '/discount/generate': {
      post: generateDiscountCode
    },
    '/discount/{discountId}': {
      delete: deleteDiscountCode
    },
    '/cart': {
      get: getCart,
      post: addItemsToCart,
      delete: deleteCart
    },
    '/cart/increase-one': {
      patch: increaseProductQuantityByOne
    },
    '/cart/reduce-one': {
      patch: reduceProductQuantityByOne
    },
    '/cart/:productId': {
      delete: deleteProductFromCart
    },
    '/order': {
      get: getAllOrders,
      post: createNewOrder
    },
    '/order/{orderId}': {
      get: getOrder,
      patch: orderStatus,
      delete: cancelOrder
    },
    '/product/{productId}/reviews': {
      get: getAllProductReviews,
      post: addReview
    },
    '/product/{productId}/reviews/{reviewId}': {
      get: getReview,
      patch: updateReview,
      delete: deleteReview
    }
  }
};

export default docs;
