function register()
{
var a=$("#rni").val();	
var b=$("#rani").val();
var c=$("#rpass").val();
var d=$("#rpni").val();
var invocation=
	{
	adapter:"insert",
	procedure:"procedure1",
	parameters:[a,b,c,d]
	};
var options=
	{
		onSuccess:succ,
		onFailure:fail
	};
WL.Client.invokeProcedure(invocation, options);
	}
function succ()
{
alert("Registeration Successful!");
}
function fail()
{
alert("Registeration Failed!");	
}     