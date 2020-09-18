import { Router } from 'express';
import {getDestinationByProfileIdController, toggleSaveController} from "../controllers/save.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";

const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/').post(isLoggedIn, toggleSaveController);
router.route("/:profileId")
    .get( asyncValidatorController([
        check("profileId", "please provide a valid profileId").isUUID()
    ]),getDestinationByProfileIdController)


export default router;