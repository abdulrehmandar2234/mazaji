import express from 'express';

// Controllers
import { faqController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';

const { addfaq, getAllfaq, getfaq, deletefaq, updatefaq } = faqController;

const router = express.Router();

router.use(protect);

router.route('/').post(restrictedTo('admin'), addfaq).get(getAllfaq);

router.get('/:id', getfaq);

router.delete('/:id', deletefaq);

router.patch('/:id', updatefaq);

export default router;
