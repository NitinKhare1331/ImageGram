import { createPost, deletePostById } from '../repositories/postRepository.js'

export const createPostService = async (createPostObject) => {
    // 1. Take the image of the post and upload on aws

    // 2. Get the url of the image from the aws response

    // 3. Create the post with the caption and the image url in the db using repository layer

    // 4. Return the post object

    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;

    const post = await createPost(caption, image);

    return post;
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id);
    return response;
}