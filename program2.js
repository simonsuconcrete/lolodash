
	'use strict';

    // include the Lo-Dash library
    var _ = require("lodash");

    var sortme = function(item) {
        // sort in descending order
		return _.sortBy(item, "quantity").reverse();
    };

    // export the worker function as a nodejs module
    module.exports = sortme;

