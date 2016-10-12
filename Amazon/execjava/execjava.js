'use strict';

const exec = require('child_process').exec;

exports.handler = (event, context, callback) => {
    // if (!event.cmd) {
    //     return callback('Please specify a command to run as event.cmd');
    // }
    const child = exec('java -jar lambda.jar',
        function(error, stdout, stderr) {
            console.log('Output -> ' + stdout);
            if (error !== null) {
                console.log("Error -> " + error);
            }
        });

    // Log process stdout and stderr
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
};
