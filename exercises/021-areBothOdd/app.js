// Write your function here
function areBothOdd(num, num2)
{
    if((num%2) & (num2%2))
    {
        return true
    }
    else
    {
        return false
    }
}
var output = areBothOdd(1, 3);
console.log(output); // --> true
