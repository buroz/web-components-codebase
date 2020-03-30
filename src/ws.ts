import io from "socket.io-client";

const socket = io("//ws.example.com/private", { secure: true });

const clientsWrapper = document.getElementById("clients");

socket.on("CLIENTS_LIST", (clients: string[]) => {
  clientsWrapper.innerHTML = "";

  clients.forEach(c => {
    let el = document.createElement("li");
    el.innerHTML += c;
    clientsWrapper.append(el);
  });
});
