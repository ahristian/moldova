
import { Router } from 'express';
import {getAllDestinationsController } from '../controllers/destination.controller';


const router = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/').get(getAllDestinationsController);

export default router;
