(function (Promise, Object) {
    'use strict';

    if ('defer' in Promise) {
        return;
    }

    Promise.defer = function () {
        var fnResolve, fnReject;

        var promise = new Promise(function (resolve, reject) {
            fnResolve = resolve;
            fnReject = reject;
        });

        return Object.defineProperties({}, {
            promise: {
                value: promise
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
    };
}(Promise, Object));