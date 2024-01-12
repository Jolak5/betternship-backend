import express from 'express';
import router from '../../../routes/chatRoutes';

const router = express.Router();

router.use('/chats', chatRoutes);

export default router;

const authRouter = require("../../../v1/routers/auth/auth");

const express = require("express");

const router = express.Router();

router.use(authRouter);

module.exports = router;
