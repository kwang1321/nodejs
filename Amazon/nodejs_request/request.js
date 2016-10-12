//Load the request module
'use strict';

var request = require('request');

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    console.log('the result is ', event.key1 + event.key2 + event.key3);
    console.log(' from the zip file ');
    // console.log("{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET", 3));
    doRequest();
    callback(null, event.key1); // Echo back the first key value
    //callback('Something went wrong');
};


var doRequest = function() {
    console.log('doRequest is starting...');
    // console.log(require.paths);
    //Lets try to make a HTTPS GET request to modulus.io's website.
    //All we did here to make HTTPS call is changed the `http` to `https` in URL.
    request('http://www.baidu.com', function(error, response, body) {
        //Check for error
        if (error) {
            return console.log('Error:', error);
        }

        //Check for right status code
        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }

        //All is good. Print the body
        console.log(body); // Show the HTML for the Modulus homepage.

    });
};

// doRequest();
