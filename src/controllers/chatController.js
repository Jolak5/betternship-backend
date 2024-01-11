import Response from '../core/utils/Response'; 
import Chat from '../models/chat';

const sendHttpResponse = (res, status, message) => {
  res.status(status).send(message);
};

export const createChat = async (req, res) => {
  try {
    const { message, senderId } = req.body;
    const newChat = await Chat.create({ message, senderId });
    sendHttpResponse(res, 200, "Chat created successfully");
  } catch (error) {
    sendHttpResponse(res, 500, error.message);
  }
};

export const getChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      sendHttpResponse(res, 404, 'Chat not found');
    } else {
      sendHttpResponse(res, 200, chat);
    }
  } catch (error) {
    sendHttpResponse(res, 500, error.message);
  }
};

export const updateChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const { message } = req.body;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      sendHttpResponse(res, 404, 'Chat not found');
    } else {
      chat.message = message;
      await chat.save();
      sendHttpResponse(res, 200, chat);
    }
  } catch (error) {
    sendHttpResponse(res, 500, error.message);
  }
};

export const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      sendHttpResponse(res, 404, 'Chat not found');
    } else {
      await chat.destroy();
      sendHttpResponse(res, 200, { message: 'Chat deleted successfully' });
    }
  } catch (error) {
    sendHttpResponse(res, 500, error.message);
  }
};
