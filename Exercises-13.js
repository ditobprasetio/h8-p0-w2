function xo(str) {
  var tipe1 = 0;
  var tipe2 = 0;
  
  for (var i = 0; i < str.length; i++) {
   if(str[i] === "x") {
     tipe1 += 1
   }
   else if(str[i] === "o") {
     tipe2 += 1
   }

  }
  if (tipe1 === tipe2) {
    return true;
  }
  else {
    return false;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true