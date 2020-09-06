

function sin()
{
  document.calculator.result.value=Math.sin(document.calculator.result.value);
}
function cos()
{
  document.calculator.result.value=Math.cos(document.calculator.result.value);
}
function tan()
{
  document.calculator.result.value=Math.tan(document.calculator.result.value);
}
function backspc()
{
  var x = document.calculator.result.value;
  document.calculator.result.value=x.substr(0,x.length-1)
}
function square()
{
  document.calculator.result.value=Math.pow(document.calculator.result.value,2);
}
function cube()
{
  document.calculator.result.value=Math.pow(document.calculator.result.value,3);
}
function sqrt()
{
  document.calculator.result.value=Math.pow(document.calculator.result.value,1/2);
}
function cbrt()
{
  document.calculator.result.value=Math.pow(document.calculator.result.value,1/3);
}
function log()
{
  document.calculator.result.value=Math.log(document.calculator.result.value)/Math.LN10;
}
function number(value)
{
  document.calculator.result.value+=value;
}
function remove(value)
{
  document.calculator.result.value=value;
}
function equal()
{
  document.calculator.result.value=eval(  document.calculator.result.value);
}
