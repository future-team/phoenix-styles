
define("urlpath", ["require", "exports", "otherModuleName"], function (require, exports, otherModuleName) {
    exports.verb = function() {
        return otherModuleName.verb();
    }
});





define(function(require, exports, module) {
    var app = require('./app');

    module.exports = {
        foo: 'bar',
        doSomething: function() {}
    };

});




