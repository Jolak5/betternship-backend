import { Request, Response } from "express";
import Chat from "../v1/models/chat.model";

let chats: Chat[] = [];

const postChat = (req: Request, res: Response):void => {
    const { id, id_user, id_user2, message, date,time, status } = req.body;
    const newChat = new Chat(id, id_user, id_user2, message, date,time, status);
    chats.push(newChat);
    res.status(201).json({ success: true, data: newChat });
};

const getChatHistory = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id); // Get user ID from request params
    const userChats = chats.filter((chat) => chat.id_user === id || chat.id_user2 === id);
    res.status(200).json({ success: true, data: userChats });
};

export { postChat, getChatHistory };