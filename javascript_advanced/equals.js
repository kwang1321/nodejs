'use strict';
// the difference between == and ===.
// === checks both type as well as the value equality.
// == only checkes the values.
console.log(0 == '0');
console.log(0 == '');
console.log('0' == '');
console.log(String(0));
// false. that because it want to convert "false" into Boolean.
console.log(Boolean("false")) // it is actually true;
console.log(false == "false");