import { Router } from 'express';
import {toggleSaveController} from "../controllers/save.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/').post(isLoggedIn, toggleSaveController);

export default router;