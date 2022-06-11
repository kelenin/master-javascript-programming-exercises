// Write your function here
function isEvenLength(letras)
{
    if(letras.length % 2 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}
var output = isEvenLength('wow');
console.log(output); // --> false
