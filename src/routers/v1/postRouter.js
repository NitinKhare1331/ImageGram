//Here all the post related routes are present
// We look at the remaining url part after /posts

import express from 'express';
import { s3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts, updatePost } from "../../controllers/postController.js";
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/', isAuthenticated, s3uploader.single('image'), validate(zodPostSchema), createPost);

router.get('/', getAllPosts);

router.put('/:id', s3uploader.single('image'), updatePost);

router.delete('/:id', isAuthenticated, deletePost);

export default router;