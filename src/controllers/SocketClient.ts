export class SocketClient {
  static socketIo: any;

  static emit(...args: any[]) {
    SocketClient.socketIo.emit(...args);
  }

  static on(...args: any[]) {
    SocketClient.socketIo.on(...args);
  }

  static onConnection(callback: Function) {
    SocketClient.socketIo.on("connect", callback);
  }

  static once(...args: any[]) {
    SocketClient.socketIo.once(...args);
  }

  static off(...args: any[]) {
    SocketClient.socketIo.off(...args);
  }
}
