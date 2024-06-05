import { WebsocketContext } from 'providers/websocket-provider';
import { useContext, useEffect } from 'react';

export const useWebsocket = () => {
  const socketIO = useContext(WebsocketContext);

  useEffect(() => {
    socketIO.socket.connect();

    return () => {
      socketIO.socket.removeAllListeners();
      socketIO.socket.disconnect();
    };
  }, [socketIO.socket]);

  return { socket: socketIO.socket };
};
