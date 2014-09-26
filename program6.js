
//  Lololodash - learn LoDash
// ---------------------------
//  6: Give Me an Overview
//  Exercise 6 of 7


// # Give Me an Overview

// How many times you fought with having to find a total across
// a big collection of Objects? Well with Lo-Dash, there's a
// function for that.

// -------------------------------------------------------------------------------

// ## Lead the Way

// For this mission, let me show you the reduce function.

//     _.reduce(collection, [callback=identity], [accumulator])

// reduce goes through collection, calls callback each time
// and takes a rolling accumulator that it will provide to each call.
// Each iteration, callback will be called as callback(accumulator,
// value, index|key, collection) (Finally, a different callback!).

//   * `accumulator` is the rolling tally-keeping variable.
//   * `value` is the current item's value.
//   * `key` is the key of the current item in the Object.

// #### Example

//     _.reduce(
//         [1, 2, 3],
//         function(sum, num) {
//             return sum + num;
//         }
//     );

//     // 6

//     _.reduce(
//         { 'a': 1, 'b': 2, 'c': 3 },
//         function(result, num, key) {
//             result[key] = num * 3;
//             return result;
//         },
//         {}
//     );

//     // { 'a': 3, 'b': 6, 'c': 9 }

// -------------------------------------------------------------------------------

// ## Your Mission

// We have an Array recording orders made at a store.

//     [ { article: 1, quantity: 4 },
//       { article: 2, quantity: 2 },
//       { article: 1, quantity: 5 } ]

// As you can see in this example data, "1" was ordered twice. We want
// to know the total quantities ordered for each article.

// Please write a function that:

//   * Calculates the total number of orders for each article.
//   * Sorts the resulting array so that the articles with the highest number of or
// ders are on top

//     [ { article: 1, total_orders: 9 },
//       { article: 2, total_orders: 2 } ]



	'use strict';

    // include the Lo-Dash library
    var _ = require("lodash");

    var summarize = function(item) {

      var summary = [];
      var s = _.groupBy(item, "article");

      _.forEach(s, function(value,key) {
        var total = _.reduce(value, function(sum, article) {
          return sum +  article.quantity;
        }, 0);
        summary.push({"article" : parseInt(key), "total_orders" : total});
      });

      return _.sortBy(summary, "total_orders").reverse();
    };


    // export the worker function as a nodejs module
    module.exports = summarize;
