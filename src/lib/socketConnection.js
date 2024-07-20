import { io } from "socket.io-client";

const backendUrl = 'http://localhost:3977';
export const socket = io(backendUrl); // Adjust the URL if necessary
