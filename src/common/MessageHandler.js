class MessageHandler {
  static init(proxy) {
    MessageHandler.proxy = proxy;
    MessageHandler.inited = true;
  }
  static log(tag, msg) {
    MessageHandler.proxy.log(tag, msg);
  }
  static changeTheme() {
    MessageHandler.proxy.changeTheme();
  }
  static goTo(path) {
    MessageHandler.proxy.goTo(path);
  }
  static toggleViewMode(isEnable, callback) {
    MessageHandler.proxy.toggleViewMode(isEnable, callback);
  }
}

export default MessageHandler;