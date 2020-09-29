
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  const sortArray = array.sort((a, b) => a - b);
  return sortArray[0];
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  const sortArray = array.sort((a, b) => b - a);
  return sortArray[0];
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  const sum = array.reduce((acc, value) => acc + value, 0);
  return sum / array.length;
}
