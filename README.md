<!-- PROJECT LOGO -->
<br />
<h1 align="center">
  <a href="https://github.com/rpathak0/mazajiAPI.git">
    <img src="https://lh3.googleusercontent.com/p6vvoxnZwP9DATEWjt3evAye5n9-OSJdoDNV9qnV_Q7wrEJf4qyedBN4UqHM8-IBtHCA=s200" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Mazaji API</h3>
</h1>

<h4 align="center">Mazaji API built using NodeJS & MongoDB</h4>


## Deployed Version

Live demo 👉 :  <a href="https://mazaji.herokuapp.com/api-docs">Mazaji API</a>

## Key Features

* Authentication
  * Login [Public]
  * SignUp [Public]
  * Logout [User]
  * Tokens [User]
* Password Management
  * Change Password [User]
  * Forgot Password [Public]
  * Reset Password  [Public]
* Email Management
  * Send Email Verification [User]
* User
  * Create New User [Admin]
  * Get All Users [Public]
  * Get User Data Using It's ID [Public]
  * Update User Details Using It's ID [User]
  * Update User Profile Image Using It's ID [User]
  * Delete My Account [User]
  * Delete User Using It's ID [Admin]
* Cart Services
  * Add Product To Cart [User]
  * Reduce Product Quantity By One [User]
  * Increase Product Quantity By One [User]
  * Get Cart [User]
  * Delete Cart Item [User]
  * Delete Cart [User]
* Review Services
  * Create New Review [User]
  * Query All Reviews [Public]
  * Query Review Using It's ID [Public]
  * Update Review Using It's ID [User]
  * Delete Review Using It's ID [User]
* Product Services
  * Query products [Public]
  * Query Product Using It's ID [Public]
  * Create new product [Seller]
  * Update Product Details [Seller]
  * Update Product Main Image [Seller]
  * Update Product Images [Seller]
  * Delete Product Using It's ID [User]
  * Get Products Statics [Admin]
  * Top 5 Cheapeast Products [Public]
  * Add Product Color [Seller]
  * Add Product Size [Seller]
  * Delete Product Color [Seller]
  * Delete Product Size [Seller]
* Favorite Services
  * Get Favorite Products List [User]
  * Add Product to Favorite List [User]
  * Delete Product From Favorite List [User]
  * Check If Product In Favorite List [User]
* Discount Services
  * Generate Discount Code [Admin]
  * Get Dicount Amount [User]
  * Get All Discount Codes [Admin]
  * Verify Discount Code [User]
  * Delete Discount Code [Admin]
  * Cancel Discount Code [User]
* Order Services
  * Create New Order [User]
  * Query Orders [User]
  * Query Order Using It's ID [User]
  * Cancel Order [User]
  * Update Order Status [Admin]
* Category Services
  * Create New Category [User]
  * Query Categories [Public]
  * Query Category Using It's ID [Public]
  * Update Category Details [Admin]
  * Update Category Image [Admin]
  * Delete Category [Admin]
* Multi-Language Support

## API Usage

Check [Mazaji API Documentation](http://localhost:8000/api-docs/#/) for more info.

## Deployment

The API is deployed with git into Heroku. Below are the steps taken:

```
git init
git add -A
git commit -m "Commit message"
```

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm install
$ npm run (script)