// Packages
import express from 'express';

// Controllers
import { genreController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';

const { createGenre, getAllGenre, getGenre, updateGenre, deleteGenre } =
  genreController;

const router = express.Router();

router.use(protect);

router.route('/').post(restrictedTo('admin'), createGenre).get(getAllGenre);

router.delete('/:id', restrictedTo('admin'), deleteGenre);

router.get('/:id', restrictedTo('admin'), getGenre);

router.patch('/:id', restrictedTo('admin'), updateGenre);

export default router;
