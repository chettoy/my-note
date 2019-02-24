class Utils {
  static animate(dom, props, speed, callback) {
    for (const prop in props) {
      dom.style[prop] = props[prop];
    }
    if (callback) callback();
  }

  static fadeOut(dom, callback) {
    if (callback) callback();
  }

  static parseHTML(str) {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children;
  }
}

export default Utils;