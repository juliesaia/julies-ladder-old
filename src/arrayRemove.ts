// why the hell is this not in js by default 
declare global {
    interface Array<T> {
        remove(...args: any): this;
    }
}

import { deepEqual } from 'fast-equals'

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        
        while ((ax = this.findIndex((el) => deepEqual(el, what))) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

export { }