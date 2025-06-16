function decimalToBinary(decNumber) {
    const stack = [];
    let binaryStr = "";
    
    while (decNumber > 0) {
      stack.push(decNumber % 2);
      decNumber = Math.floor(decNumber / 2);
    }
    
    while (stack.length > 0) {
      binaryStr += stack.pop();
    }
    
    return binaryStr || "0";
  }
  
  console.log(decimalToBinary(10)); // "1010"
  console.log(decimalToBinary(42)); // "101010"