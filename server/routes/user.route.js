import express from 'express';
import { getMyInfo, getUser } from '../controllers/user.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/me', authenticateToken, getMyInfo);
router.get('/:id', getUser);

export default router;