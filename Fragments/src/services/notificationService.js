import * as signalR from "@microsoft/signalr";

const hub = {
    hubConnection : null,
}

const createHubConnection = () =>{
    hub.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44361/Notifications", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
      accessTokenFactory: () => localStorage.getItem('access_token')
    })
    .build();
    hub.hubConnection.start();
}

export {createHubConnection, hub}