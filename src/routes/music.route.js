import express from 'express';

// Controllers
import { musicController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';

import { singleMusic } from '../utils/multer';

const {
  createMusic,
  getAllMusic,
  getMusic,
  vote,
  deleteMusic,
  songsOftheWeek
} = musicController;

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post([restrictedTo('admin'), singleMusic('music')], createMusic)
  .get(getAllMusic);

router.delete('/:id', restrictedTo('admin'), deleteMusic);

router.get('/songsofweek', songsOftheWeek);

router.get('/:id', restrictedTo('admin'), getMusic);

router.post('/vote/:id', vote);

//router.patch('/:id', restrictedTo('admin'), updateGenre);

export default router;
