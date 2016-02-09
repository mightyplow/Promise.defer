# deferred
emulates the $q.defer() method

Sometimes you need a value which gets resolved later. The $q library therefore provides the defer() method.
Sadly it is not implemented in the native ES6 Promise object. This small snippet adds the defer method to the 
Promise object, which is available in chrome by default (I don't know, if it's deprecated).

## API
After the snippet got executed, there is a defer() method available on the global Promise object 
(if it wasn't there before). 

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

<code><pre>
    var deferred = Promise.defer();
</pre></code>

Now you can use the promise property.

<code><pre>
    deferred.promise.then(function (data) {
        console.log(data);
    });
</pre></code>

Now, when the deferred value gets resolved, the then() method gets executed.
 
<code><pre>
    deferred.resolve('foobar')';
</pre></code>

## example
See the example.js file to see a full usage example. You can easily execute it with node.js to run it. (Actually it uses 
the defer method which gets provided by the V8 engine.