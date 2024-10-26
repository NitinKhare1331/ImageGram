import { commentService } from "../services/commentsService.js";

export async function createComment(req, res) {
    try {
        const postId = req.params.id;
        const comment = req.body.comment;
        const userDetails = req.user;

        if(!postId){
            return res.status(404).json({
                succcess: false,
                message: 'Post not found!'
            })
        }

        const commentData = await commentService(postId, comment, userDetails._id);

        return res.status(200).json({
            success: true,
            message: 'Comment created successfully',
            data: commentData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}