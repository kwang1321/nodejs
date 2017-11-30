// must remember typeof null === "object"
> typeof 1
'number'
> typeof typeof 1
'string'
> typeof null
'object'
> typeof NULL
'undefined'
> typeof undefined
'undefined'
> typeof undefined == typeof null
false
> typeof undefined == typeof Null
true
> typeof undefined == typeof a
true
> typeof typeof null
'string'
> typeof null === "object"
true
> arr = [1, "ab", "33"];
[ 1, 'ab', '33' ]
> typeof arr
'object'
> 

// we can use toString.call() to instead
> typeof arr
'object'
> toString.call(arr)
'[object Array]'
> toString.call(a)
ReferenceError: a is not defined
    at repl:1:15
    at ContextifyScript.Script.runInThisContext (vm.js:50:33)
    at REPLServer.defaultEval (repl.js:240:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:441:10)
    at emitOne (events.js:121:20)
    at REPLServer.emit (events.js:211:7)
    at REPLServer.Interface._onLine (readline.js:282:10)
    at REPLServer.Interface._line (readline.js:631:8)
> var b;
undefined
> toString.call(b)
'[object Undefined]'
> toString.call(null)
'[object Null]'
> toString.call(undefined)
'[object Undefined]'
> toString.call(undefined)

// true or false?
> true == 1
true
> true === 1
false
> true < 2
true
> true < 1
false
> false == 0
true
> false == 0
true
> false === 0
false
> 
