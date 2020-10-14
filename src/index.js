module.exports = function check(str, bracketsConfig) {

  let bracketsArray = "";
  let sameBracketsArray = "";
  let notParCount = {};

  for(let i=0; i<bracketsConfig.length; i++){
    bracketsArray += bracketsConfig[i][0];
    bracketsArray += bracketsConfig[i][1];

    if(bracketsConfig[i][0] === bracketsConfig[i][1])
    sameBracketsArray += bracketsConfig[i][0];
  }
  console.log(bracketsArray);

  let stack = [];
  
  for(let bracket of str) {
    let apecialIndex = sameBracketsArray.indexOf(bracket);
    if(apecialIndex !== -1) notParCount[bracket] = notParCount[bracket] != undefined ? notParCount[bracket] + 1 : 1;

      let bracketsIndex = bracketsArray.indexOf(bracket);
      if (bracketsIndex === -1) continue;
      if(apecialIndex !== -1 && notParCount[bracket] % 2 === 0)bracketsIndex +=1;

      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1);
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
  }

  return stack.length === 0;
}
