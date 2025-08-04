import express from 'express';
import { createPost, getAllPosts, getPostById, getPostsByUser } from '../controllers/post.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/post/:id', getPostById);

router.get('/all', getAllPosts);

router.get('/user/:userId', getPostsByUser);

router.post('/create', authenticateToken, createPost);

export default router;