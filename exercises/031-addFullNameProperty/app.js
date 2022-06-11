function addFullNameProperty(obj) {
  // tu codigo aqui
  var fullNames = obj["fullName"];
  return  fullNames;
}
var person = {
  firstName: 'Jade',
  lastName: 'Smith',
  fullName: 'Jade Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
