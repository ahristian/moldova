
import { Router } from 'express';
import {
    getAllDestinationsController,
    selectAllDestinationsByDestinationIdController
} from '../controllers/destination.controller';


const router = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

router.route('/:destinationId').get(selectAllDestinationsByDestinationIdController);
router.route('/').get(getAllDestinationsController);

export default router;
