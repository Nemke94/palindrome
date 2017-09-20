function palindrom(str) 
{
	var re = /[^A-Za-z0-9a-я]/g;
	var str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len/2; i++) 
	{
	   if (str[i] !== str[len - 1 - i]) 
	   {
	       return document.getElementById("results").innerHTML= " nije palindrom!";
	   }
	}
	 return document.getElementById("results").innerHTML= " je palindrom!";
}

var wage = document.getElementById("val");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        run();
    }
});



function run()
{
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+ palindrom(val);

}


