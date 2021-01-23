import express from 'express';
import authController from '../controllers/userController';

const router = express.Router();

router.post('/signin',authController.signin);

module.exports = router;