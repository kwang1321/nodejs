console.log('Loading event');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

let EPOCH = 1300000000000;

function generateRowId() {
    var ts = new Date().getTime() - EPOCH; // limit to recent
    var randid = Math.floor(Math.random() * 512);
    ts = (ts * 64); // bit-shift << 6
    ts = ts + randid;
    return (ts * 512) + (randid % 512);
}

exports.handler = (event, context, callback) => {
    // TODO implement
    // callback(null, 'Hello from Lambda');
    console.log(JSON.stringify(event, null, '  '));
    dynamodb.listTables(function(err, data) {
        console.log(JSON.stringify(data, null, '  '));
    });
    var tableName = "iot_order";
    var datetime = new Date().getTime().toString();
    var order_id = event.product_number + "_" + generateRowId();
    console.log("order_id : " + order_id);
    var item = {
        "order_id": { "S": order_id.toString() },
        "customer_name": { "S": event.customer_name },
        "credit_card_info": { "S": event.credit_card_info },
        "shipping_address": { "S": event.shipping_address },
        "telephone_number": { "S": event.telephone_number },
        "product_number": { "S": event.product_number },
        "date": { "S": datetime },
        "location": { "S": "null" },
        "temperature": { "S": "null" },
        "humidity": { "S": "null" }
    };
    try {
        dynamodb.putItem({
            "TableName": tableName,
            "Item": item
        }, function(err, data) {
            if (err) {
                console.log("error is " + err);
                context.done('error', 'putting item into dynamodb failed: ' + err);
            } else {
                console.log('great success: ' + JSON.stringify(data, null, '  '));
                // context.done('K THX BY');
                // return item;
                callback(null, {
                    "result": item
                })
            }
        });
    } catch (error) {
        console.log("error is :" + error);
        context.fail("Caught: " + error);
    }
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