import express from 'express';
import router from '../../../routes/chatRoutes';

const router = express.Router();

router.use('/chats', chatRoutes);

export default router;
