
import { Router } from 'express';
import {getAllFoodController} from '../controllers/food.controller';


const router = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/').get(getAllFoodController);

export default router;
