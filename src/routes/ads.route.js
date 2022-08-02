import express from 'express';

// Controllers
import { adsController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';
import { adsMulter } from '../utils/multer';

const { addAds, deleteAd, getAds, getAdsByAdmin, updateAd, watchedby } =
  adsController;

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post(
    [
      restrictedTo('admin'),
      adsMulter([
        { name: 'video', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 }
      ])
    ],
    addAds
  )
  .get(getAdsByAdmin);

router.patch('/:id', restrictedTo('admin'), updateAd);

router.get('/get', getAds);

router.patch('/watch/:id', watchedby);

router.delete('/:id', restrictedTo('admin'), deleteAd);

export default router;
