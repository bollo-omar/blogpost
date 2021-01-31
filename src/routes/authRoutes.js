import express from 'express';
import authController from '../controllers/userController';
import postController from '../controllers/postController';

const router = express.Router();

router.post('/api/signup',authController.signup);
router.post('/api/login',authController.signin);
router.put('/api/password', authController.changePassword);


//posts
router.post('/api/post/add', postController.createpost);

module.exports = router;