// Write your function here
function isOddLength(letras)
{
    if(letras.length % 2)
    {
        return true
    }
    else
    {
        return false
    }
}
var output = isOddLength('special');
console.log(output); // true
