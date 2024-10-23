import express from 'express';
import { signin, signup } from '../../controllers/userController.js';
import { validate } from '../../validators/zodValidator.js'
import { zodSignupSchema } from '../../validators/zodSignupSchema.js'
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';


const router = express.Router();

router.post('/signup',validate(zodSignupSchema) ,signup);

router.post('/signin',validate(zodSigninSchema) ,signin);

// router.get('/profile', getProfile);

export default router;