function checkAge(name, age) {
  // your code here
  if(name==='Adrian' && age<21)
  {
    return "¡Go home, "+({name})+"!";
  }
  {
    return "¡Welcome, "+({name})+"!";
  }
}
var output = checkAge('Adrian', 22);
console.log(output); // --> '¡Welcome Adrian!'
