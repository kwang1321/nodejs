var AWS = require('aws-sdk');
// var dynamodb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    // TODO implement
    // callback(null, 'Hello from Lambda');
    console.log(JSON.stringify(event, null, '  '));
    
    var tableName = "iot_order";
    var docClient = new AWS.DynamoDB.DocumentClient();
    
    var params = {
        TableName : tableName,
        FilterExpression: "#loc = :nul",
        ExpressionAttributeValues: {
            ":nul" : "null"
        },
        ExpressionAttributeNames: {
           "#loc": "location"
        }
    };
    
    docClient.scan(params, function(err, data) {
        if (err) {
            console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded." + data.Items.length);
            data.Items.forEach(function(item) {
                console.log(item);
            });
            callback(null, data.Items);
        }
    });
};

// create an IAM Lambda role with access to dynamodb
// Launch Lambda in the same region as your dynamodb region
// (here: us-east-1)
// dynamodb table with hash key = user and range key = datetime



// sample event
//{
//  "user": "bart",
//  "msg": "hey otto man"
//}