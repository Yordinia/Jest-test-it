const stringLength = string => {
    let x = string.trim().length;
    let sol = (x>0 && x<=10)? x : 'error';
    return sol;
  }
  
  module.exports = stringLength;