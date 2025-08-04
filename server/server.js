import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    return res.send("Jobsy.");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});