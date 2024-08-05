import { io } from "socket.io-client";

const backendUrl = process.env.REACT_APP_BACKEND_SOCKET_URLss;
export const socket = io(backendUrl); // Adjust the URL if necessary
