'use strict';

require("./string.js");

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    console.log('the result is ', event.key1 + event.key2 + event.key3);
    console.log(' from the zip file ');
    console.log("{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET", 3));
    callback(null, event.key1); // Echo back the first key value
    //callback('Something went wrong');
};
