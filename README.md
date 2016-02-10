# deferred
emulates the defer() method of the <a href="https://github.com/kriskowal/q">q library</a>

Sometimes you need a value which gets resolved later. The $q library therefore provides the defer() method. Sadly it is not implemented in the native <a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise" >ES6 Promise object</a>. This small snippet adds the defer method to the Promise object, which is available in chrome by default (I don't know, if it's deprecated). 
## API
After the snippet got executed, there is a defer() method available on the global Promise object (if it wasn't there before).

This method return an object with the following properties and methods:

### properties
    promise
        the actual promise, which gets resolved or rejected
    
### methods
    resolve([resason]) 
        resolves the deferred value
        
    reject([reason]) 
        rejects the deferred value
 
## usage
Create a deferred value by calling

    var deferred = Promise.defer();

Now you can use the promise property.

    deferred.promise.then(function (data) {
        console.log(data);
    });

Finally, when the deferred value gets resolved, the then() method gets executed.
 
    deferred.resolve('foobar')';

## example
See the example.js file to see a full usage example. You can easily execute it with node.js to run it. The defer() 
method of the V8 engine gets deleted before the snippet inclusion to ensure using the new one (only for example).