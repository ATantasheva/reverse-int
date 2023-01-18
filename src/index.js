module.exports = function reverse (n) {
   let arr1 = n.toString();
   let arr = arr1.split('');
  // console.log(arr);
  let arr2 = arr.reverse();
  let arr3 = arr2.join('');
  let num = parseInt(arr3);
 // console.log(num);
return num;
}