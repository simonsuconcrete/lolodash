// ## Your Mission

// We're receiving a hastable or associative array of European towns with their
// populations in millions:

//     { Hamburg:    { population: 1.698 },
//       Strasbourg: { population: 0.272 },
//       Rom:        { population: 2.753 },
//       Dublin:     { population: 0.528 } }

// We want a new size attribute added to every town where the value depends on
// the town's its population, as follows:

//     { City1: {population: 1.58, size: 'big'  },
//       City2: {population: 0.58, size: 'med'  },
//       City3: {population: 0.28, size: 'small'} }

// Attention: the list could also be a Array, so you will have to use a
// collection function.

// Use the following guidelines:

//   * All cities having a population over 1 million are "big".
//   * Cities having a population less than 1 million but more than 0.5 million are
//  "med".
//   * All cities having a population less than 0.5 million are "small".

	'use strict';

    // include the Lo-Dash library
    var _ = require("lodash");

    var sizeme = function(item) {
        // size
        var itemSized = _.forEach(item,
        	function(item) {
            	item.size = item.population > 1 ? 'big' : (item.population > 0.5 ? 'med' : 'small');
        	});

		return itemSized;
    };

    // export the worker function as a nodejs module
    module.exports = sizeme;

