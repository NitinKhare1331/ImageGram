import { createComment } from "../repositories/commentsRepository.js";

export const commentService = async (postId, comment, user) => {
    try {
        const newComment = await createComment(postId, comment, user);
        return newComment;
    } catch (error) {
        throw error;
    }
}