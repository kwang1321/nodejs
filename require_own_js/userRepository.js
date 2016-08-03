var userReposit = function() {
    var self = this;
    self.addUser = function(uname) {
        self.uname = uname;
    };
    self.get = function() {
        return self.uname;
    }
};


module.exports = userReposit;
