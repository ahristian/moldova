
import { Router } from 'express';
import {getProfileByIdController
} from '../controllers/profile.controller';


const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/:profileId').get(getProfileByIdController);

export default router;
