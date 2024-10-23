import express from 'express';
import { signup } from '../../controllers/userController.js';
import { validate } from '../../validators/zodValidator.js'
import { zodSignupSchema } from '../../validators/zodSignupSchema.js'


const router = express.Router();

router.post('/signup',validate(zodSignupSchema) ,signup);

// router.get('/profile', getProfile);

export default router;