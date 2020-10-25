module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let newStr = str;

  for (const item of bracketsConfig) {
    arr.push(item[0] + item[1]);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newStr = newStr.replace(arr[j], '');
    }
    if (newStr.length == 0) {
      return true;
    }
  }

  return false;
}