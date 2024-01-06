import express from 'express';
import * as chatController from '../controllers/chatController';

const router = express.Router();


router.post('/chats', chatController.createChat); 
router.get('/chats/:id', chatController.getChat); 
router.put('/chats/:id', chatController.updateChat); 
router.delete('/chats/:id', chatController.deleteChat); 

export default router;
