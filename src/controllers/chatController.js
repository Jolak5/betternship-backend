import Response from '../core/utils/Response'; 
import Chat from '../models/chat';

export const createChat = async (req, res) => {
  try {
    const { message, senderId } = req.body;
    const newChat = await Chat.create({ message, senderId });
    Response.created(res, 200, "Chat created successfully"); // Use the created method from the response model
  } catch (error) {
    Response.internalError(res, 500, error.message); // Use the internalError method for error response
  }
};

export const getChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      Response.notFound(res, 404, 'Chat not found'); // Use the notFound method for 404 response
    } else {
      Response.success(res, 200, chat); // Use the success method for successful response
    }
  } catch (error) {
    Response.internalError(res, 500, error.message); // Use the internalError method for error response
  }
};

export const updateChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const { message } = req.body;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      Response.notFound(res, 404, 'Chat not found'); 
    } else {
      chat.message = message;
      await chat.save();
      Response.success(res, 200, chat); 
    }
  } catch (error) {
    Response.internalError(res, 500, error.message); 
  }
};

export const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      Response.notFound(res, 404, 'Chat not found'); // Use the notFound method for 404 response
    } else {
      await chat.destroy();
      Response.success(res, 200, { message: 'Chat deleted successfully' }); // Use the success method for successful response
    }
  } catch (error) {
    Response.internalError(res, 500, error.message); // Use the internalError method for error response
  }
};
