"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = require("./auth.swagger");

var _category = require("./category.swagger");

var _event = require("./event.swagger");

var _ads = require("./ads.swagger");

var _genre = require("./genre.swagger");

var _faq = require("./faq.swagger");

var _product = require("./product.swagger");

var _cart = require("./cart.swagger");

var _review = require("./review.swagger");

var _user = require("./user.swagger");

var _order = require("./order.swagger");

var _favorite = require("./favorite.swagger");

var _discount = require("./discount.swagger");

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
  servers: [{
    url: 'https://mazaji.herokuapp.com/api-docs',
    description: 'Production Server'
  }, {
    url: 'http://localhost:8000/api',
    description: 'Development Server'
  }],
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
  security: [{
    jwt: []
  }],
  paths: {
    '/auth/login': {
      post: _auth.signIn
    },
    '/auth/register': {
      post: _auth.signUp
    },
    '/auth/logout': {
      post: _auth.logout
    },
    '/auth/tokens': {
      post: _auth.generateTokens
    },
    '/auth/forgot-password': {
      post: _auth.forgotPassword
    },
    '/auth/reset-password': {
      post: _auth.resetPassword
    },
    '/auth/change-password': {
      patch: _auth.changePassword
    },
    '/user': {
      get: _user.getAllUsers,
      post: _user.addUser
    },
    '/user/{userId}': {
      get: _user.getUser,
      delete: _user.deleteUser
    },
    '/user/update-details': {
      patch: _user.updateUserDetails
    },
    '/user/update-profile-image': {
      patch: _user.updateUserProfileImage
    },
    '/user/me': {
      delete: _user.deleteMyAccount
    },
    '/category': {
      get: _category.getAllCategories,
      post: _category.addCategory
    },
    '/category/{categoryId}': {
      get: _category.getCategory,
      patch: _category.updateCategoryDetails,
      delete: _category.deleteCategory
    },
    '/category/{categoryId}/image': {
      patch: _category.updateCategoryImage
    },
    '/event': {
      get: _event.getAllEvent,
      post: _event.createEvent
    },
    '/event/{id}': {
      get: _event.getEvent,
      patch: _event.updateEvent,
      delete: _event.deleteEvent
    },
    '/event/{eventId}/cover-image': {
      patch: _event.updateEventCoverImage
    },
    '/genre': {
      get: _genre.getAllGenre,
      post: _genre.createGenre
    },
    '/genre/{id}': {
      get: _genre.getGenre,
      patch: _genre.updateGenre,
      delete: _genre.deleteGenre
    },
    '/faq': {
      get: _faq.getAllFaq,
      post: _faq.addFaq
    },
    '/ads': {
      get: _faq.getAdsByAdmin,
      post: _ads.addAds
    },
    '/ads/get': {
      get: _ads.getAds
    },
    '/ads/{id}': {
      patch: _ads.updateAds,
      delete: _ads.deleteAds
    },
    '/faq/{id}': {
      get: _faq.getFaq,
      patch: _faq.updateFaq,
      delete: _faq.deleteFaq
    },
    '/product': {
      get: _product.getAllProducts,
      post: _product.addProduct
    },
    '/product/{productId}': {
      get: _product.getProduct,
      delete: _product.deleteProduct
    },
    '/product/top-5-cheap': {
      get: _product.top5Cheap
    },
    '/product/product-stats': {
      get: _product.productStats
    },
    '/product/{productId}/details': {
      patch: _product.updateProductDetails
    },
    '/product/{productId}/main-image': {
      patch: _product.updateProductMainImage
    },
    '/product/{productId}/images': {
      patch: _product.updateProductImages
    },
    '/product/color/{productId}': {
      post: _product.addProductColor,
      delete: _product.deleteProductColor
    },
    '/product/size/{productId}': {
      post: _product.addProductSize,
      delete: _product.deleteProductSize
    },
    '/favorite': {
      get: _favorite.getFavoriteList,
      post: _favorite.addFavoriteProduct
    },
    '/favorite/{productId}': {
      delete: _favorite.deleteProductFromFavorite
    },
    '/favorite/check/{productId}': {
      get: _favorite.checkProductInFavoriteList
    },
    '/discount': {
      get: _discount.getAllDiscountCodes
    },
    '/discount/verify': {
      post: _discount.verifyDiscountCode
    },
    '/discount/cancel': {
      delete: _discount.cancelDiscountCode
    },
    '/discount/find': {
      get: _discount.getDiscount
    },
    '/discount/generate': {
      post: _discount.generateDiscountCode
    },
    '/discount/{discountId}': {
      delete: _discount.deleteDiscountCode
    },
    '/cart': {
      get: _cart.getCart,
      post: _cart.addItemsToCart,
      delete: _cart.deleteCart
    },
    '/cart/increase-one': {
      patch: _cart.increaseProductQuantityByOne
    },
    '/cart/reduce-one': {
      patch: _cart.reduceProductQuantityByOne
    },
    '/cart/:productId': {
      delete: _cart.deleteProductFromCart
    },
    '/order': {
      get: _order.getAllOrders,
      post: _order.createNewOrder
    },
    '/order/{orderId}': {
      get: _order.getOrder,
      patch: _order.orderStatus,
      delete: _order.cancelOrder
    },
    '/product/{productId}/reviews': {
      get: _review.getAllProductReviews,
      post: _review.addReview
    },
    '/product/{productId}/reviews/{reviewId}': {
      get: _review.getReview,
      patch: _review.updateReview,
      delete: _review.deleteReview
    }
  }
};
var _default = docs;
exports.default = _default;