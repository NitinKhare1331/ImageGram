import express from "express";
import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.use('/posts', postRouter); //If in the remaining URL i.e after /api/v1, we have the url starting with /posts, then the request is forwarded to the post router

router.use('/users', userRouter);

export default router;