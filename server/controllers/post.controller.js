import { Post } from "../models/Post.model.js";

export const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find()
            .populate('author', 'name email')
            .sort({createdAt: -1});
        return res.status(200).json(posts);
    }
    catch(error){
        console.log("Error while getting posts.",error);
        return res.status(500).json({ error: "Failed to fetch posts" });
    }
}

export const createPost = async (req, res) => {
    try{
        const userId = req.user._id; // From auth middleware
        const {content} = req.body;
        const newPost = await Post.create({content, author: userId});
        const populatedPost = await Post.findById(newPost._id).populate('author', 'name email');
        return res.status(201).json(populatedPost); 
    }
    catch(error){
        console.log("Error while creating post.",error);
        return res.status(500).json({ error: "Failed to create post" });
    }
}

export const getPostById = async (req, res) => {
    try{
        const postId = req.params.id;
        const post = await Post.findById(postId);
        return res.status(200).json(post);
    }
    catch(error){
        console.log("Error while getting the post.", error);
    }
}

export const getPostsByUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const posts = await Post.find({ author: userId })
            .populate('author', 'name email')
            .sort({createdAt: -1});
        return res.status(200).json(posts);
    }
    catch(error){
        console.log("Error while getting user posts.", error);
        return res.status(500).json({ error: "Failed to fetch user posts" });
    }
}