var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '10.1.4.23',
    user: 'root',
    password: 'root',
    database: 'bms'

});

// connection.connect();

// connection.query('SELECT * from batteryData limit 5', function(err, rows, fields) {
//       if (!err)
//             console.log('The solution is: ', rows);
//       else
//             console.log('Error while performing Query.');

// });

// connection.end();


// test array loop
var rawData = [{
    id: 20849,
    battery_id: 1,
    ch_cur: 563,
    dis_cur: 0,
    temperature: 24.331,
    battery_status: 1,
    charger_status: 1,
    timestp: "Thu Aug 18 2016 09: 05: 28 GMT - 0700(PDT)"
}, {
    id: 20851,
    battery_id: 1,
    ch_cur: 566,
    dis_cur: 0,
    temperature: 23.92,
    battery_status: 1,
    charger_status: 1,
    timestp: "Thu Aug 18 2016 09: 05: 28 GMT - 0700(PDT)"
}];
var arrayLength = rawData.length;
var cur = [];
var sum = 0;
var sumArr = [];
for (var i = arrayLength - 1; i >= 0; i--) {
    var row = [];
    var sumRow = [];
    var chCur = rawData[i].ch_cur;
    var current = 0;
    if (chCur >= 200)
        current = 1000 * chCur / 4095;
    sum += current;
    row.push(Number(current).toFixed(2));
    row.push(new Date(rawData[i].timestp).getTime());
    sumRow.push(Number(sum).toFixed(2));
    sumRow.push(new Date(rawData[i].timestp).getTime());
    //Do something
    cur.push(row);
    sumArr.push(sumRow);
}
console.log(cur);
console.log(sumArr);


var arr = ['a', 'bv'];
arr.splice(0, 0, "bb");
arr.splice(0, 0, "cc");
console.log(arr);

