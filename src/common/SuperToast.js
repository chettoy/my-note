import Velocity from 'velocity-animate'

class SuperToast {
  constructor() {
    this._context = null;
    this._duration = 1500;
    this._view = SuperToast.getDefaultView();
    this._deadtime = 0;
    this._domPtr = null;
  }

  static getContainerView() {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = '<div id="SuperToast" style="position:fixed;bottom:3rem;z-index:200;"></div>';
    return tmp.body.children[0];
  }

  static getDefaultView() {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = '<div style="opacity:0;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"></div>';
    return tmp.body.children[0];
  }

  static _handle() {
    const time = Date.now();
    let nextHandleTime = 0;
    for (let i = 0; i < SuperToast._queue.length; i++) {
      const deadtime = SuperToast._queue[i]._deadtime;
      if (time >= deadtime) {
        const view = SuperToast._queue[i]._domPtr;
        Velocity(view, {opacity: 0}, () => {
          const container = document.querySelector('#SuperToast');
          container.removeChild(view);
          if (container.children[0] === null) {
            container.parentNode.removeChild(container);
          }
        });
        SuperToast._queue.splice(i, 1);
        i--;
      }else{
        if (deadtime < nextHandleTime || !nextHandleTime)
         nextHandleTime = deadtime;
      }
    }
    if (nextHandleTime !== 0) {
      SuperToast._timer = setTimeout(SuperToast._handle, nextHandleTime - time);
      SuperToast._nextHandleTime = nextHandleTime;
    }else{
      SuperToast._timer = null;
      SuperToast._nextHandleTime = 0;
    }
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
    if (!document.querySelector('#SuperToast')) {
      document.body.appendChild(SuperToast.getContainerView());
    }
    const container = document.querySelector('#SuperToast');
    if (container.children[0]) {
      container.insertBefore(this._view, container.children[0]);
    }else{
      container.appendChild(this._view);
    }
    this._deadtime = Date.now() + this._duration;
    this._domPtr = container.children[0];
    SuperToast._queue.push(this);
    Velocity(this._domPtr, {opacity: 1});
    if (SuperToast._timer) {
      if (this._deadtime < SuperToast._nextHandleTime) {
        clearTimeout(SuperToast._timer)
      }else{
        return;
      }
    }
    SuperToast._timer = setTimeout(SuperToast._handle, this._duration);
    SuperToast._nextHandleTime = this._deadtime;
  }

  static makeText(context, text, duration) {
    return new SuperToast().setContext(context).setText(text).setDuration(duration);
  }
}

SuperToast._timer = null;
SuperToast._queue = [];
SuperToast._nextHandleTime = 0;
SuperToast.LENGTH_SHORT = 1500;
SuperToast.LENGTH_LONG = 3000;

export default SuperToast;