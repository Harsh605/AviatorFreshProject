import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { baseURL } from "../Api/Clientfunctions";
const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(baseURL, {
      query: { clientId: "0000000000" },
    }); // Replace with your server URL
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
