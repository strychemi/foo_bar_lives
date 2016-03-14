

var combSort = function(array) {
  // initialize comb size
  var gap = Math.floor( array.length / 1.3 );

  //Start with large comb and every iteration will reduce the size of the comb
  while (gap > 0) {
    console.log(gap);
    // i + gap < array.length because we need to access "i + gap" index
    // i.e. it's the end of the COMB
    for (var i = 0; i + gap <= array.length; i++) {
      // if the element on the left end of the "comb" is greater than the right side of the comb, swap them (sorting ascending order)
      if (array[i] > array[i + gap]) {
        var temp = array[i + gap];
        array[i + gap] = array[i];
        array[i] = temp;
      }
    }
    // every iteration this gap will "comb" through the data set and swap values
    gap  = Math.floor( gap / 1.3 ); // update comb size to be smaller
  }
  //return sorted array
    return array;
};
