/*
 You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
*/

function findOutlier(integers) {
    function par(i) { return i & 1; }
  
    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
      if (parity == par(integers[2]))
        // [0] and [2] are the true parity so [1] is the outlier
        return integers[1];
  
      // [1] and [2] are the true parity so [0] is the outlier
      return integers[0];
    }
    return integers.find((i) => par(i) != parity);
  }

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));