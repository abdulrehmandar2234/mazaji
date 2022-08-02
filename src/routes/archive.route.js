import express from 'express';

// Controllers
import { archiveController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';
import { singleFile } from '../utils/multer';

const {
  createArchive,
  addArchive,
  getListArchive,
  getArchive,
  getSubArchive,
  getSubListArchive
} = archiveController;

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post([restrictedTo('admin'), singleFile('image')], createArchive)
  .get(getListArchive);

router.get('/subList/:id', getSubListArchive);

router.post('/add', singleFile('image'), addArchive);

router.get('/user', getArchive);

router.get('/sub/:id', getSubArchive);

export default router;
