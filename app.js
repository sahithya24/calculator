var ans = document.getElementById('res');
//function to display the values in the text box
function dispVal(x)
{
    ans.value += x;
}
//function to clear the text box
function clr()
{
    ans.value = '';
}
//function to calculate the result
function result()
{
    x = eval(ans.value);
    ans.value = x;
}
//function to delete recently entered value
function squr(){
    x = ans.value;
     ans.value = Math.sqrt(x);
   
}