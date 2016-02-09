#!/usr/bin/node
(function () {
    'use strict';

    // execute the deferred snippet (does nothing in V8)
    require('./deferred');

    // constructor for a person object
    function Person () {
        // create a new deferred value
        var name = Promise.defer();

        return {
            // returns the promise of the deferred value
            getName: function () {
                return name.promise;
            },

            // resolves the promise, when the name gets set
            setName: function (_name) {
                name.resolve(_name);
            }
        }
    }

    // create a Person instance
    var person = Person();

    // set the resolve handler
    person.getName().then(function (name) {
        console.log(name);
    });

    // set the name of the persion asynchronously
    setTimeout(function () {
        person.setName('mightyplow');
    }, 2000);
}());

