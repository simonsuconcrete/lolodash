
    // include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(a) {
        // do work; return stuff
		return _.where(a, {active: true});
    };

    // export the worker function as a nodejs module
    module.exports = worker;

