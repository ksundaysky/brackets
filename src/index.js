module.exports = function check(str, bracketsConfig) {
  // your solution
  regexp = new RegExp(bracketsConfig.map(bracket => bracket.join('')).join(' ').replace(/[(){}|[\]]/g, '\\$&').replace(/\s/g, '|'), "g");
  while (regexp.test(str)) {
    str = str.replace(regexp, '');    
  }
  return !str;
}