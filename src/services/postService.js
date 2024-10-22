import { countAllPosts, createPost, deletePostById, findAllPosts, updatePostById } from '../repositories/postRepository.js'

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

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    // Calculate total number of posts and total number of pages
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalPages, totalDocuments
    }

}

export const updatePostService = async (id, updateObject) => {
    const response = await updatePostById(id, updateObject);
    return response;
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id);
    return response;
}
