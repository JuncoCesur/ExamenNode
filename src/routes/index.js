import { Router } from 'express';
import {home} from '../controller/controller.js'
const router = Router();

router.get('/', home);
export default router;
