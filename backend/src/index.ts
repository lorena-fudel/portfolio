import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import portfolioRoutes from './routes/portfolioRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de middlewares
app.use(cors());
app.use(express.json());

// Main router
app.use('/api', portfolioRoutes);

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
