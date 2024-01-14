const url = require("url");
const WebSocket = require("ws");
const PendingMessage = require("../../v1/models/PendingMessage");
const uuid = require("uuid");
const Message = require("../../v1/models/Message");
module.exports = async function (server) {
  const wss = new WebSocket.Server({ server });

  // *All connected clients mapped by its corresponding user id
  const clients = new Map();

  // *All pending messages mapped by their user id
  wss.on("connection", async (ws, req) => {
    const query = url.parse(req.url, true).query;

    // *Stores the connection to memory
    clients.set(query.clientId, ws);

    // *Gets all pending messages from the database
    const pendingMessages = await PendingMessage.findAll({
      where: { recipientId: query.clientId },
    });

    if (pendingMessages.length) {
      ws.send(JSON.stringify(pendingMessages));

      try {
        const deleted = await PendingMessage.destroy({
          where: { recipientId: query.clientId },
        });
        console.log("Removed pending messages", deleted);
      } catch (error) {
        console.log(error.toString());
      }
    }

    console.log("WebSocket connection is established");

    ws.on("message", async (message) => {
      if (ws.readyState === WebSocket.OPEN) {
        const parsed = JSON.parse(message);
        const recipientId = parsed.id;

        const socket = clients.get(recipientId);

        // *If the target socket connection does not exist, stores incoming
        // *messages to the database
        if (!socket) {
          const uuidv4 = uuid.v4();
          try {
            await PendingMessage.create({
              id: uuidv4,
              senderId: query.id,
              recipientId,
              content: parsed.message,
            });

            await Message.create({
              id: uuid.v4(),
              senderId: query.clientId,
              recipientId,
              content: parsed.message,
            });

            console.log("Recipient would receive message when connected.");
          } catch (error) {
            console.log(error.toString());
          }

          return;
        }

        if (socket.readyState === WebSocket.OPEN) {
          socket.send(parsed.message);
        }
      }
    });
    ws.on("close", (reason) => {
      clients.delete(query.clientId);
      console.log(`WebSocket connection is closed. ${reason}`);
    });
    ws.on("error", (error) => {
      console.log(error);
    });
  });
};
