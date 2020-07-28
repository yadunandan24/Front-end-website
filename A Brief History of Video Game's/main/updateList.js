function update_list()
{
	var i = 1;
	var j = 1;
	var str;

	var temp = display();

	for(i=1; i<11;i++)
	{
		str = i.toString()+"2";
		document.getElementById(str).innerHTML = temp[i-1][2];

		str = i.toString()+"3";
		document.getElementById(str).innerHTML = temp[i-1][1];
		
	} 

	  change();
}