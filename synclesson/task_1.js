function evenArray(arr) {
  var newArray = [ ];
  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i] % 2 == 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

  evenArray([10,20,1,2,4,6,8,7,22,11]);
