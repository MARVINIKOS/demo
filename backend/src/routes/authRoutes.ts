import { Router } from 'express';
import { signup, login } from '../controllers/AuthController';

const router = Router();

// signup route
router.post('/signup', signup);

// login route (dummy for now)
router.post('/login', login);

export default router;
