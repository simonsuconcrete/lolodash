	'use strict';

    // include the Lo-Dash library
    var _ = require("lodash");

    var rateMyHotness = function(item) {
        // heat
        var itemSized = _.forEach(item,
        	function(item) {
            	item.size = item.population > 1 ? 'big' : (item.population > 0.5 ? 'med' : 'small');
        	});

		return itemSized;
    };

    // export the worker function as a nodejs module
    module.exports = rateMyHotness;

