import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;