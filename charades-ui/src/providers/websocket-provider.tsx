import { createContext, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebsocketProviderProps {
  children: ReactNode;
}

export interface SocketIO {
  socket: Socket;
}

const socketIO: SocketIO = {
  socket: io(import.meta.env.VITE_WEBSOCKET_LOCAL || '', {}),
};

export const WebsocketContext = createContext<SocketIO>(socketIO);

export const WebsocketProviderProvider = ({ children }: WebsocketProviderProps) => {
  return <WebsocketContext.Provider value={socketIO}>{children}</WebsocketContext.Provider>;
};
