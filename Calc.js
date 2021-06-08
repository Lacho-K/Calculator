function Calculate()
{
    var text = document.getElementById("exp").value;
    var stackNums = [];
    var stackOps = [];  
    for (var i = 0; i < text.length; i++) 
    {
        if(text[i] >= '0' && text[i] <= '9')
        {
            stackNums.push(text[i]);
        }   
        if(text[i] == '+' || text[i] == '*')
        {
            stackOps.push(text[i]);
        }
        if(text[i] == ')')
        {
            let sign = stackOps.pop();
            if(sign == '+')
            {
                stackNums.push(parseInt(stackNums.pop()) + parseInt(stackNums.pop()));
            }
            else if(sign == '*')
            {
                stackNums.push(parseInt(stackNums.pop()) * parseInt(stackNums.pop()));
            }
        }       
    }
    console.log(stackNums.pop());
}