import {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword,
  thirdpartysignup
} from './auth.controller';

import { getresetPassword } from './htmlcontroller';

import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats
} from './product.controller';

import {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} from './user.controller';

import {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} from './category.controller';

import {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} from './review.controller';

import {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
} from './cart.controller';

import {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
} from './order.controller';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.controller';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.controller';

import {
  createGenre,
  getAllGenre,
  getGenre,
  updateGenre,
  deleteGenre
} from './genre.controller';

import {
  createTemplate,
  getAllTemplates,
  getTemplate,
  updateTemplate,
  deleteTemplate
} from './template.controller';

import {
  createMusic,
  getAllMusic,
  getMusic,
  songsOftheWeek,
  vote,
  deleteMusic
} from './music.controller';

import {
  addfaq,
  updatefaq,
  getAllfaq,
  getfaq,
  deletefaq
} from './faqs.controller';

import {
  createArchive,
  getListArchive,
  addArchive,
  getArchive,
  getSubArchive,
  getSubListArchive
} from './archive.controller';

import {
  addAds,
  watchedby,
  getAds,
  getAdsByAdmin,
  deleteAd,
  updateAd
} from './ads.controller';

import {
  createEvent,
  getAllEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  updateEventCoverImage
} from './event.controller';

const authController = {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword,
  thirdpartysignup
};

const htmlcontroller = {
  getresetPassword
};

const userController = {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryController = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
};

const productController = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats
};

const reviewController = {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
};

const cartController = {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
};

const orderController = {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
};

const discountController = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteController = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const genreController = {
  createGenre,
  getAllGenre,
  getGenre,
  updateGenre,
  deleteGenre
};

const templateController = {
  createTemplate,
  getAllTemplates,
  getTemplate,
  updateTemplate,
  deleteTemplate
};

const musicController = {
  createMusic,
  getAllMusic,
  getMusic,
  songsOftheWeek,
  vote,
  deleteMusic
};

const faqController = {
  addfaq,
  getAllfaq,
  getfaq,
  updatefaq,
  deletefaq
};

const archiveController = {
  addArchive,
  createArchive,
  getListArchive,
  getArchive,
  getSubArchive,
  getSubListArchive
};

const adsController = {
  addAds,
  watchedby,
  getAds,
  getAdsByAdmin,
  deleteAd,
  updateAd
};

const eventController = {
  createEvent,
  getAllEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  updateEventCoverImage
};

export {
  authController,
  userController,
  productController,
  categoryController,
  reviewController,
  cartController,
  orderController,
  discountController,
  favoriteController,
  htmlcontroller,
  genreController,
  musicController,
  faqController,
  archiveController,
  adsController,
  eventController,
  templateController
};
