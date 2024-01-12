import { Response } from 'express';
import { HttpResponse } from '../core/utils/Response';
import Chat from '../models/chat';

export const createChat = async (req: any, res: Response) => {
  try {
    const { message, senderId } = req.body;
    const newChat = await Chat.create({ message, senderId });
    HttpResponse(res, 200, 'Chat created successfully', newChat);
  } catch (error) {
    HttpResponse(res, 500, error.message);
  }
};

export const getChat = async (req: any, res: Response) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      HttpResponse(res, 404, 'Chat not found');
    } else {
      HttpResponse(res, 200, 'Chat retrieved successfully', chat);
    }
  } catch (error) {
    HttpResponse(res, 500, error.message);
  }
};

export const updateChat = async (req: any, res: Response) => {
  try {
    const chatId = req.params.id;
    const { message } = req.body;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      HttpResponse(res, 404, 'Chat not found');
    } else {
      chat.message = message;
      await chat.save();
      HttpResponse(res, 200, 'Chat updated successfully', chat);
    }
  } catch (error) {
    HttpResponse(res, 500, error.message);
  }
};

export const deleteChat = async (req: any, res: Response) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      HttpResponse(res, 404, 'Chat not found');
    } else {
      await chat.destroy();
      HttpResponse(res, 200, 'Chat deleted successfully', { message: 'Chat deleted successfully' });
    }
  } catch (error) {
    HttpResponse(res, 500, error.message);
  }
};
