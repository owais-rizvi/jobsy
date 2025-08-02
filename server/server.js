import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    return res.send("Jobsy.");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});