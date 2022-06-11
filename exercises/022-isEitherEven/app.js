// Write your function here
function isEitherEven(num, num2)
{
    if((num%2==0) || (num2%2==0))
    {
        return true
    }
    else
    {
        return false
    }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true
