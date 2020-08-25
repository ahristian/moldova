
import { Router } from 'express';
import {getAllTweetsController } from '../controllers/destination.controller';
import { asyncValidatorController } from '../controllers/asyncValidator.controller';
import {isLoggedIn} from "../controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

const router = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllTweetsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema()));

export default router;
