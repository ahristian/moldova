
import { Router } from 'express';
import {getDestinationByProfileIdController, getProfileByIdController} from '../controllers/profile.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";

const router = Router();

router.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "please provide a valid profileId").isUUID()
        ]), getProfileByIdController)

router.route("/destination/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "please provide a valid profileId").isUUID()
        ]), getDestinationByProfileIdController)

export default router;