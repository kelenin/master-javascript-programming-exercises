function getProperty(obj, key) {
  // your code here
  return obj[key];
}

var car = {
  model: ''
};
var output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'
