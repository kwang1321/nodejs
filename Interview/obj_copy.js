
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
objclone.a = 3;
console.log(obj); // a is still one? yes.
console.log(objclone);

// tricky place
var obj = {a: 1 ,b: 2, c: {'age' :30}};
var objclone = Object.assign({},obj);
// we can not copy nested object.
obj.c.age = 20;
obj.a = 18;
console.log(objclone);
