// Custom functio for array of objects

module.exports.removeDuplicates = function(e,n){var o={};return Object.keys(e.reduce(function(e,r){return o[r[n]]||(o[r[n]]=r),o},o)).map(function(e){return o[e]})}

// compareFunction for array sort
module.exports.compareFuncByTitle =  function(a,b){return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);}
