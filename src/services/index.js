import {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword,
  thirdpartysignup
} from './auth.service';

import {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
} from './review.service';

import {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} from './user.service';

import {
  createCategory,
  queryCategories,
  queryCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
} from './category.service';

import {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats
} from './product.service';

import {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
} from './cart.service';

import {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder
} from './order.service';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.service';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.service';

import {
  createGenre,
  getAllGenre,
  getGenre,
  deleteGenre,
  updateGenre
} from './genre.service';

import {
  addMusic,
  getAllMusic,
  getMusic,
  songsOftheWeek,
  deleteMusic,
  vote
} from './music.service';

import {
  addfaq,
  updatefaq,
  getAllfaq,
  getfaq,
  deletefaq
} from './faqs.service';

import {
  createArchive,
  getListArchive,
  addArchive,
  getArchive,
  getSubArchive,
  getSubListArchive
} from './archive.service';

import {
  addAds,
  deleteAds,
  getAds,
  getAdsByAdmin,
  updateAds,
  watchads
} from './ads.service';

import {
  createEvent,
  getAllEvent,
  getEvent,
  deleteEvent,
  updateEvent,
  updateEventCoverImage
} from './event.service';

const authService = {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword,
  thirdpartysignup
};

const reviewService = {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
};

const userService = {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryService = {
  createCategory,
  queryCategories,
  queryCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
};

const productService = {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats
};

const cartService = {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
};

const orderService = {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder
};

const discountService = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteService = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const GenreService = {
  createGenre,
  getAllGenre,
  getGenre,
  updateGenre,
  deleteGenre
};

const musicService = {
  addMusic,
  getAllMusic,
  getMusic,
  vote,
  songsOftheWeek,
  deleteMusic
};

const faqService = {
  addfaq,
  getAllfaq,
  getfaq,
  deletefaq,
  updatefaq
};

const archiveService = {
  addArchive,
  createArchive,
  getListArchive,
  getArchive,
  getSubArchive,
  getSubListArchive
};

const adsService = {
  addAds,
  deleteAds,
  getAds,
  getAdsByAdmin,
  updateAds,
  watchads
};

const eventService = {
  createEvent,
  getAllEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  updateEventCoverImage
};

export {
  authService,
  userService,
  categoryService,
  eventService,
  productService,
  reviewService,
  cartService,
  orderService,
  discountService,
  favoriteService,
  GenreService,
  musicService,
  faqService,
  archiveService,
  adsService
};