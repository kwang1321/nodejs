var userRepository = require("./userRepository.js");
require("./string.js");

var userRepositoryInstance = new userRepository();  
userRepositoryInstance.addUser("zhangsan");  
var username = userRepositoryInstance.get();
console.log(username);
console.log("{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET", 3));