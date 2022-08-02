import event from './eventEmitter';

const sockets = function (io) {
  io.on('connection', (socket) => {
    socket.on('action', (action) => {
      switch (action.type) {
        case 'SOCKET_JOIN_CHAT_ROOM': {
          socket.join(action.chatRoomId);
          break;
        }
        case 'SOCKET_LEAVE_CHAT_ROOM': {
          socket.leave(action.chatRoomId);
          break;
        }
        case 'MESSAGE': {
          event.on('message', (data) => {
            io.in(action.chatRoomId).emit(data);
          });

          break;
        }
      }
    });
  });
};

module.exports = sockets;
