function findLarget(arr){
  var n = arr.length;
  var max = arr[0];
  for(i=1; i<n; i++){
    if(arr[i]> max){
      max = arr[i];
    }
  }
  return max;
}

findLarget([10, 324, 45, 90, 9808])
