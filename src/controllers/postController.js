import { createPostService, deletePostService } from "../services/postService.js";

export async function createPost(req, res) {
    console.log(req.file);
    //call the service layer

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location
    });

    return res.json({
        success: true,
        message: 'Post created succesfully',
        data: post
    })
}

export async function deletePost(req, res) {
    try {
        const postId = req.params.id;
        const response = await deletePostService(postId);
        if(!response){
            return res.status(404).json({
                succcess: false,
                message: 'Post not found!'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}