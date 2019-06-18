import Velocity from 'velocity-animate'

class Toast {
  constructor() {
    this._context = null;
    this._duration = 1500;
    this._parent = document.body;
    this._view = Toast.getDefaultView();
  }

  static getDefaultView() {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = '<div id="Toast" style="opacity:0;position:fixed;bottom:3rem;z-index:999;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"></div>';
    return tmp.body.children[0];
  }

  static _handle() {
    if (Toast._timer) return;
    if (Toast._queue.length < 1) return;
    const instance = Toast._queue[0];
    instance._parent.appendChild(instance._view);
    Velocity(document.querySelector('#Toast'), {opacity: 1});
    Toast._timer = setTimeout(() => {
      const view = document.querySelector('#Toast');
      if (view) {
        Velocity(view, {opacity: 0}, () => {
          view.parentNode.removeChild(view);
          Toast._timer = null;
          Toast._queue.splice(0, 1);
          Toast._handle();
        });
      }
    }, instance._duration);
  }

  setContext(context) {
    this._context = context;
    return this;
  }

  setText(text) {
    this._view.textContent = text;
    return this;
  }

  setDuration(duration) {
    this._duration = duration;
    return this;
  }

  show() {
    Toast._queue.push(this);
    Toast._handle();
  }

  static makeText(context, text, duration) {
    return new Toast().setContext(context).setText(text).setDuration(duration);
  }
}

Toast._timer = null;
Toast._queue = [];
Toast.LENGTH_SHORT = 1500;
Toast.LENGTH_LONG = 3000;

export default Toast;