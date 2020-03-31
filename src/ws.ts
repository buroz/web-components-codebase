import io from "socket.io-client";
import config from "./config";

const socket = io(`//${config.ws}/private`, { secure: true });

socket.on("CLIENTS_LIST", (clients: string[]) => {
  console.log(clients);
});
