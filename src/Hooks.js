function Hooks() {
    return {
        initEnv: function () {
            Function.prototype.hook = function (realFunc, hookFunc, context) {
                var _context = null; //函数上下文
                var _funcName = null; //函数名

                _context = context || window;
                _funcName = getFuncName(this);
                _context['realFunc_' + _funcName] = this;

                console.log(window);

                if (_context[_funcName].prototype && _context[_funcName].prototype.isHooked) {
                    console.log("Already has been hooked,unhook first");
                    return false;
                }
                function getFuncName(fn) {
                    // 获取函数名
                    var strFunc = fn.toString();
                    var _regex = /function\s+(\w+)\s*\(/;
                    var patten = strFunc.match(_regex);
                    if (patten) {
                        return patten[1];
                    };
                    return '';
                }
                try {
                    eval('_context[_funcName] = function ' + _funcName + '(){\n' +
                        'var args = Array.prototype.slice.call(arguments,0);\n' +
                        'var obj = this;\n' +
                        'hookFunc.apply(obj,args);\n' +
                        "return _context['realFunc_" + _funcName + "'].apply(obj,args);\n" +
                        '};');
                    _context[_funcName].prototype.isHooked = true;
                    return true;
                } catch (e) {
                    console.log("Hook failed,check the params.");
                    return false;
                }
            }
            Function.prototype.unhook = function (realFunc, funcName, context) {
                var _context = null;
                var _funcName = null;
                _context = context || window;
                _funcName = funcName;
                if (!_context[_funcName].prototype.isHooked) {
                    console.log("No function is hooked on");
                    return false;
                }
                _context[_funcName] = _context['realFunc' + _funcName];
                delete _context['realFunc_' + _funcName];
                return true;
            }
        },
        cleanEnv: function () {
            if (Function.prototype.hasOwnProperty("hook")) {
                delete Function.prototype.hook;
            }
            if (Function.prototype.hasOwnProperty("unhook")) {
                delete Function.prototype.unhook;
            }
            return true;
        }
    };
}

export default Hooks;