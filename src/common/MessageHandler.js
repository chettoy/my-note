class MessageHandler {
  static init(proxy) {
    MessageHandler.proxy = proxy;
    MessageHandler.inited = true;
  }
  static log(tag, msg) {
    MessageHandler.proxy.log(tag, msg);
  }
}

export default MessageHandler;