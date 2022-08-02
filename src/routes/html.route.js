import express from 'express';

import { htmlcontroller } from '../controllers/index';

const router = express.Router();

const { getresetPassword } = htmlcontroller;

router.get('/reset-password/:token', getresetPassword);

export default router;
