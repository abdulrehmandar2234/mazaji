// Packages
import express from 'express';

// Utils
import { anyMulter } from '../utils/multer';

// Controllers
import { eventController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';

const {
  createEvent,
  getAllEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  updateEventCoverImage
} = eventController;

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post([restrictedTo('admin'), anyMulter()], createEvent)
  .get(getAllEvent);

router.delete('/:id', restrictedTo('admin'), deleteEvent);

router.get('/:id', getEvent);

router.patch('/:id', restrictedTo('admin'), updateEvent);

router.patch('/:eventId/cover-image', anyMulter(), updateEventCoverImage);

export default router;
