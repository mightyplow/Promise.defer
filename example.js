#!/usr/bin/node
(function () {
    'use strict';

    // remove the V8 Promise defer method()
    delete Promise.defer;

    // execute the deferred snippet (does nothing in V8)
    require('./defer');

    // constructor for a person object
    function Person () {
        // create a new deferred value
        var _name = Promise.defer();

        return {
            // returns the promise of the deferred value
            getName: function () {
                return _name.promise;
            },

            // resolves the promise, when the _name gets set
            setName: function (name) {
                _name.resolve(name);
            }
        };
    }

    // create a Person instance
    var person = Person();

    // set the resolve handler
    person.getName().then(function (name) {
        console.log(name);
    });

    // set the name of the person asynchronously
    setTimeout(function () {
        person.setName('mightyplow');
    }, 2000);
}());

