(function (Promise, Object) {
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

        Object.defineProperties(deferred, {
            promise: {
                value: deferred
            },

            resolve: {
                value: function (reason) {
                    fnResolve(reason);
                }
            },

            reject: {
                value: function (reason) {
                    fnReject(reason);
                }
            }
        });

        return deferred;
    }
}(Promise, Object));