(function (Promise, Object) {
    'use strict';

    if ('defer' in Promise) {
        return;
    }

    function PropertyValue (val) {
        return {
            value: val
        };
    }

    Promise.defer = function () {
        var fnResolve, fnReject;

        var promise = new Promise(function (resolve, reject) {
            fnResolve = resolve;
            fnReject = reject;
        });

        return Object.create({}, {
            promise: PropertyValue(promise),
            resolve: PropertyValue(fnResolve),
            reject: PropertyValue(fnReject)
        });
    };
}(Promise, Object));