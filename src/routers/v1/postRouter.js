//Here all the post related routes are present
// We look at the remaining url part after /posts

import express from 'express';
import { s3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts, updatePost } from "../../controllers/postController.js";
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { isAdmin, isAuthenticated } from '../../middlewares/authMiddleware.js'
import { createComment } from '../../controllers/commentsController.js';

const router = express.Router();

/**
 * @swagger
 * /posts:
 *  post:
 *      summary: Create a new post
 *      description: Create a new post which requires jwt token, image, caption
 * 
 */

router.post('/', isAuthenticated, s3uploader.single('image'), validate(zodPostSchema), createPost);

router.get('/', getAllPosts);

router.put('/:id', isAuthenticated, isAdmin, s3uploader.single('image'), updatePost);

router.delete('/:id', isAuthenticated, deletePost);

router.post('/:id', isAuthenticated, createComment);

export default router;