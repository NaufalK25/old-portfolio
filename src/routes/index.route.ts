import { Router } from 'express';
import { getIndex } from '../controllers/index.controller';
import { error404 } from '../controllers/error.controller';

const router = Router();

router.get('/', getIndex);
router.use(error404);

export default router;
