let y = 0;
let ths = [null,'st','nd','rd','th']
const stringLength = string => {
  y += 1;
  let subfix = (y>3)? y+ths[4]: y+ths[y];
  console.log('========================================')
  console.log('this is the', subfix, ' time stringLength runs');
  let x = string.trim().length;
  if(x>0 && x<=10);
  else {
    x = new Error('This is a BAAAD error');
  }
  return x;
}

module.exports = stringLength;