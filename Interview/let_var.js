// 0,1,2,3,4
for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000);
}

// 5,5,5,5,5
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000);
}

// 5,5,5,5,5
// IIFE
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, i * 1000);
    })(i);
}