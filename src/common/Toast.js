import Velocity from 'velocity-animate'

class Toast {
    constructor() {
        this.__context = this;
        this.__during = 1500;
        this.__parent = document.body;
        this.__view = Toast.getDefaultView();
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
        instance.__parent.appendChild(instance.__view);
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
        }, instance.__during);
    }

    setContext(context) {
            this.__context = context;
            return this;
    }

    setText(text) {
            this.__view.textContent = text;
            return this;
    }

    setDuring(during) {
            this.__during = during;
            return this;
    }

    show() {
        Toast._queue.push(this);
        Toast._handle();
    }

    static makeText(context, text, during) {
        return new Toast().setContext(context).setText(text).setDuring(during);
    }
}

Toast._timer = null;
Toast._queue = [];
Toast.LENGTH_SHORT = 1500;
Toast.LENGTH_LONG = 3000;

export default Toast;