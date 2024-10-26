import Comment from "../schema/comments.js";

export const createComment = async (postId, commentText, user) => {
    try {
        const newComment = await Comment.create({
            post: postId,
            comment: commentText,
            user: user
        });
        return newComment;
    } catch(error) {
        console.log(error);
        throw error;
    }
}