import express from 'express';

import authRoute from './auth.route';
import userRoute from './user.route';
import productRoute from './product.route';
import categoryRoute from './category.route';
import cartRoute from './cart.route';
import orderRoute from './order.route';
import discountRoute from './discount.route';
import favoriteRoute from './favorite.route';
import genreRoute from './genre.route';
import musicRoute from './music.route';
import faqRoute from './faqs.route';
import archiveRoute from './archive.route';
import adsRouter from './ads.route';
import eventRoute from './event.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/category', categoryRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/discount', discountRoute);
router.use('/favorite', favoriteRoute);
router.use('/genre', genreRoute);
router.use('/music', musicRoute);
router.use('/faq', faqRoute);
router.use('/archive', archiveRoute);
router.use('/ads', adsRouter);
router.use('/event', eventRoute);

export default router;
