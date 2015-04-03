(function() {
    'use strict';
    
    var mongolog   = require('mongolog');
    
    module.exports = function(options) {
        return function*(next) {
            var res = this.response,
                req = {
                    url         : this.request.url,
                    connection  : {
                        remoteAddress: this.ip
                    }
                },
                
                mongo = mongolog(options).bind(null, req, res);
            
            yield mongo;
            yield next;
        };
    };
})();
