let y = 0;
let ths = [null,'st','nd','rd','th']
const stringLength = string => {
  y += 1;
  let subfix = (y>3)? y+ths[4]: y+ths[y];
  console.log('========================================')
  console.log('this is the', subfix, 'time stringLength runs');
  let x = string.trim().length;
  if(x>0 && x<=10) {"Do Nothing";
  console.log('x>0 && x<=10 is: ', x>0 && x<=10, x);
    }
  else {
    console.log('x>0 && x<=10 is: ', x>0 && x<=10, x);
    console.error('not  b/n 1&10 chars'); throw Error}
    return x;
  }
  
  console.log(stringLength('halla  '))

  console.log(stringLength(' hallahallahallahallahalla'))

  module.exports = stringLength;