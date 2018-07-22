import * as signalR from '@aspnet/signalr';

/* TODO: Put in proper URL that reads from config. */
const API_BASE_URL = 'localhost:1111';

export namespace HubFactory {
    export function createConnection(url: string) {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(API_BASE_URL + url)
            .build();

        return connection;
    }
}