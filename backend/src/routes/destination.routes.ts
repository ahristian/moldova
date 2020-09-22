
import { Router } from 'express';
import {
    getAllDestinationsController,
    selectAllDestinationsByDestinationIdController
} from '../controllers/destination.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";


const router = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)

router.route('/:destinationId').get(asyncValidatorController([
    check("destinationId", "please provide a valid destinationId").isUUID()
]),selectAllDestinationsByDestinationIdController);

router.route('/').get(getAllDestinationsController);

export default router;
