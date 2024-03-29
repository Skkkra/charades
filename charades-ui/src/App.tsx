import './App.scss';

import { useEffect, useState } from 'react';

import { socket } from './socket';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            if (!isConnected) {
              socket.connect();
            }
          }}
        >
          connect to WebScoket
        </button>
        <p>connected: {'' + isConnected}</p>
      </div>
    </>
  );
}

export default App;
