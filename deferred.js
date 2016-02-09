(function (Promise) {
    'use strict';

    if ('defer' in Promise) {
        return;
    }

    Promise.defer = function () {
        var fnResolve, fnReject;

        var deferred = new Promise(function (resolve, reject) {
            fnResolve = resolve;
            fnReject = reject;
        });

        Object.definePropery(deferred, 'promise', {
            value: deferred
        });

        return deferred;
    }
}(Promise));