// Packages
import express from 'express';

// Controllers
import { templateController } from '../controllers';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';

const {
  createTemplate,
  getAllTemplates,
  getTemplate,
  updateTemplate,
  deleteTemplate
} = templateController;

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post(restrictedTo('admin'), createTemplate)
  .get(getAllTemplates);

router.delete('/:id', restrictedTo('admin'), deleteTemplate);

router.get('/:id', restrictedTo('admin'), getTemplate);

router.patch('/:id', restrictedTo('admin'), updateTemplate);

export default router;
