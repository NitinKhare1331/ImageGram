//Here all the post related routes are present
// We look at the remaining url part after /posts

import express from 'express';
import { s3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts } from "../../controllers/postController.js";

const router = express.Router();

router.post('/', s3uploader.single('image'), createPost);

router.get('/', getAllPosts)

router.delete('/:id', deletePost);

export default router;