function indexOfIgnoreCase(s1, s2) {
  // write your code here
  let trueStr = s1.toLowerCase();
  let trueSubStr = s2.toLowerCase();

  if (trueStr.includes(trueSubStr)) {
    for (let i = 0; i < trueStr.length; i++) {
      // Make pairs
      let pairs = ""
      for (let p = i; p < trueSubStr.length + i; p++) {
        pairs += trueStr[p]
      }
      console.log(pairs,trueSubStr);
      
      if (pairs == trueSubStr) return i
    }
  }
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
