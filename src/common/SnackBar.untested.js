import Velocity from 'velocity-animate';

class SnackBar {
  static LENGTH_SHORT = 1500;
  static LENGTH_LONG = 3000;
  static LENGTH_IMMEDIATE = -1;

  constructor() {
    this.#affectedFAB = new Set();
    this.#during = 1500;
    this.#timer = null;
    this.#parent = document.body;
    this.#view = SnackBar.getDefaultView();
    this.#touchstart = null;
    this.#touchmove = null;
    this.#touchend = null;
    this.#onshowed = null;
    this.#ondismiss = null;
  }

  static getDefaultView() {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = '<div id="SnackBar" style="width:100%;height:3rem;position:fixed;left:0px;bottom:-3rem;z-index:200;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"><span style="line-height:3rem;margin-left:1.25rem;"></span></div>';
    return tmp.body.children[0];
  }

  setDuring(during) {
    this.#during = during;
    return this;
  }

  setOnShowed(func) {
    this.#onshowed = func;
    return this;
  }
  setOnDismiss(func) {
    this.#ondismiss = func;
    return this;
  }

  setParent(view) {
    if (view) this.#parent = view;
    return this;
  }

  setText(text) {
    this.#view.childNodes[0].textContent = text;
    return this;
  }

  #setTimer(during) {
    if (this.#during > 0) {
      if (!during) {
        during = this.#during;
      }
      this.#timer = setTimeout(() => {
        this.dismiss();
      }, during);
    }
  }

  #clearTimer() {
    if (this.#timer){
      clearTimeout(this.#timer);
      this.#timer = null;
    }
  }

  /* dismiss([shouldRecoverFAB], [callbackFunc]) */
  dismiss(arg1, arg2) {
    this.#clearTimer();
    let callback;
    if (!(arg1 === false)) {
      this.#affectedFAB.forEach(obj => {
        const fab = obj.view;
        if (obj.bottom !== 'auto') {
          Velocity(fab, {bottom: obj.bottom}, 'fast');
        }else if (obj.top !== 'auto') {
          Velocity(fab, {top: obj.top}, 'fast');
        }
        this.#affectedFAB.delete(obj);
      });
      
      if (!(arg1 === true)) {
        callback = arg1;
      }
    }
    if (arg2) callback = arg2;
    const view = document.querySelector('#SnackBar');
    if (view) {
      const _remove = () => {
        view.removeEventListener('touchstart', this.#touchstart);
        view.removeEventListener('touchmove', this.#touchmove);
        view.removeEventListener('touchend', this.#touchend);
        this.#touchstart = null;
        this.#touchmove = null;
        this.#touchend = null;
        view.parentNode.removeChild(view);
        if (this.#ondismiss) this.#ondismiss();
        if (callback) callback();
      }
      if (getComputedStyle(view)['display'] !== 'none' && view.getBoundingClientRect().left < document.documentElement.clientWidth) {
        Velocity(view, {bottom: -view.offsetHeight + 'px'}, 'fast', _remove);
      }else{
        _remove();
      }
    }
  }

  show() {
    if (document.querySelector('#SnackBar') !== null) {
      this.dismiss(false, this.show);
      return;
    }else{
      this.#parent.appendChild(this.#view);
    }
    const view = document.querySelector('#SnackBar');
    if (document.documentElement.clientWidth > 800) {
      view.style.width = '400px';
      view.style.margin = '20px';
    }
    let left;
    let touchX;
    let moveX;
    view.addEventListener('touchstart', this.#touchstart = e => {
      this.#clearTimer();
      left = parseInt(getComputedStyle(view)['left']);
      touchX = e.targetTouches[0].pageX;
      return false;
    });
    view.addEventListener('touchmove', this.#touchmove = e => {
      moveX = e.targetTouches[0].pageX;
      if (moveX > touchX) {
        view.style.left = (left + moveX - touchX) + 'px';
      }
      return false;
    });
    view.addEventListener('touchend', this.#touchend = e => {
      if (parseInt(getComputedStyle(view)['left']) > document.documentElement.clientWidth / 3) {
        Velocity(view, {left: document.documentElement.clientWidth + 'px'}, () => {
          this.dismiss();
        });
      }else{
        Velocity(view, {left: 0}, 'ease');
        if (this.#timer === null) {
          this.#setTimer(1500);
        }
      }
      return false;
    });
    if (document.documentElement.clientWidth > 800 || !('ontouchstart' in window)) {
      view.onclick = () => {
        this.#clearTimer();
        Velocity(view, {opacity: 0}, () => this.dismiss());
      };
    }
    const fabs = document.querySelectorAll('.fab');
    Array.prototype.forEach.call(fabs, function(el, i){
      if (getComputedStyle(el)['position'] === 'fixed' && document.documentElement.clientHeight - el.getBoundingClientRect().top - el.offsetHeight < view.offsetHeight && el.getBoundingClientRect().left < view.getBoundingClientRect().left + view.offsetWidth) {
        const obj = {};
        obj.view = el;
        obj.top = getComputedStyle(el)['top'];
        obj.bottom = getComputedStyle(el)['bottom'];
        if (obj.bottom !== 'auto') {
          Velocity(el, {bottom: parseInt(obj.bottom) + view.offsetHeight + 'px'});
        }else if(obj.top !== 'auto'){
          Velocity(el, {top: parseInt(obj.top) - view.offsetHeight + 'px'});
        }else{
          Velocity(el, {bottom: view.offsetHeight + 'px'});
        }
        this.#affectedFAB.add(obj);
      }
    });
    if (typeof this.#onshowed === 'function') {
      Velocity(view, {bottom: 0}, () => {
        setTimeout(this.#onshowed, 0);
      });
    }else{
      Velocity(view, {bottom: 0});
    }
    this.#setTimer();
  }

  static make(view, text, during) {
    return new SnackBar().setParent(view).setText(text).setDuring(during);
  }
}

export default SnackBar;