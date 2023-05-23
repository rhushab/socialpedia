import express from 'express';
import { login } from '../controllers/auth.js';

// this code allows express to identify that these routes will all be
// configured
const router = express.Router();

router.post('/login', login);

export default router;
