// Write your function here
function isSameLength(letra, letra2)
{
    if((letra.length) & (letra2.length))
    {
        return true
    }
    else
    {
        return false
    }
}
var output = isSameLength('words', 'super');
console.log(output); // --> true
