import express from 'express';
import authController from '../controllers/userController';

const router = express.Router();

router.post('/api/signup',authController.signup);
router.post('/api/login',authController.signin);
router.put('/api/password', authController.changePassword);

module.exports = router;