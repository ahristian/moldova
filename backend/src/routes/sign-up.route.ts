import { Router } from 'express';
import { signUpProfileController } from '../controllers/sign-up.controller';
import { signUpValidator } from '../validators/signup.validator';
import { asyncValidatorController } from '../controllers/asyncValidator.controller';
import {activationController} from '../controllers/activation.controller';
import {param} from 'express-validator';

const { checkSchema } = require('express-validator');

const router = Router();

router.route('/').post(asyncValidatorController(checkSchema(signUpValidator)), signUpProfileController);
router.route('/activation/:activation').get(asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]), activationController)

export default router;