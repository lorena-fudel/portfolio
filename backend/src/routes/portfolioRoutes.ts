import { Router } from 'express';
import { getTechnologies, getExperiences, getGoals, saveMessage } from '../controllers/portfolioController';

const router = Router();

// Rutas GET
router.get('/technologies', getTechnologies);
router.get('/experiences', getExperiences);
router.get('/goals', getGoals);

// Ruta POST para el formulario de contacto
router.post('/contact', saveMessage);

export default router;
