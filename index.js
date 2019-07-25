function stringExpansion(s) {
  // Good luck!
  let num = -1;
  let newAr = [];
  
  var sAr = s.split("");
  
  newAr = sAr.map(element => {
    if (isNaN(element)){  
      switch (num){
        case -1:
          return element
          break
        case 0:
          return ""
          break
        default:
          return element.repeat(num)
      }
    } else {
      num = element
      }
  });
  return newAr.join("");
}

stringExpansion('0b0ab5c')
//Output: cccccc
stringExpansion('3b0a2c')
//Output: bbbcc
