import Chat from '../models/chat'; 

export const createChat = async (req, res) => {
  try {
    const { message, senderId } = req.body; 
    const newChat = await Chat.create({ message, senderId });
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getChat = async (req, res) => {
  try {
    const chatId = req.params.id; 
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      res.status(404).json({ message: 'Chat not found' });
    } else {
      res.status(200).json(chat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const { message } = req.body;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      res.status(404).json({ message: 'Chat not found' });
    } else {
      chat.message = message; 
      await chat.save();
      res.status(200).json(chat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      res.status(404).json({ message: 'Chat not found' });
    } else {
      await chat.destroy();
      res.status(200).json({ message: 'Chat deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
