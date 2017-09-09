
/*function communal(){
	var a = prompt('firstvoda');
	var b = prompt('secondvoda');
	var waterDo = a - b;
	var waterRes = waterDo * 13.64;
	alert(Math.ceil(waterDo * 13.64));
	var c = prompt('firstlight');
	var d = prompt('secondlight');
	var e = 90;
	var lightDo = c - d;
	var lightOf = lightDo - 100;
	var lightMult = lightOf * 1.68;
	var lightRes = e + lightMult;
	alert(Math.ceil(e + lightMult));
}
communal()*/
	var save = document.getElementById('save');
	var waterRate;
	var beforeLight;
	var afterLight;
	var counterImput;
	var peopleInput;
save.onclick = function(){
	waterRate = document.getElementById('waterRate').value;
	beforeLight = document.getElementById('beforeLight').value;
	afterLight = document.getElementById('afterLight').value;
	counterImput = document.getElementById('counterImput').value;
	peopleInput = document.getElementById('peopleInput').value;
	console.log(waterRate, beforeLight, afterLight, counterImput);

}

goWater.onclick = function(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;	
	var goWater = document.getElementById('goWater');
	var waterp = document.getElementById('waterp');
	var waterDo = a - b;
	var numbWat = parseFloat(waterRate);	
	var waterRes = waterDo * numbWat;
	waterp.innerHTML = waterRes;
	console.log(waterRes);
	console.log(typeof numbWat);
}

golight.onclick = function(){
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	var c = parseInt(c);
	var d = parseInt(d);
	console.log(typeof c);
	console.log(typeof d);
	var golight = document.getElementById('golight');
	var lightp = document.getElementById('lightp');
	var beforeLight1 = parseFloat(beforeLight);
	var afterLight1 = parseFloat(afterLight);
	var lightDo = c - d;
	var lightOf = lightDo - 100;
	var lightRes1 = lightOf * afterLight1;
	var lightRes2 = 100 * beforeLight1;
	var lightRes = lightRes1 + lightRes2;
	lightp.innerHTML = lightRes;
	console.log(lightRes);
	console.log(typeof beforeLight1);
	console.log(typeof afterLight1);
	console.log(typeof lightRes);
	console.log(typeof lightRes1);
	console.log(typeof lightRes2);
	console.log(typeof beforeLight);
	console.log(typeof afterLight);
	console.log(typeof lightDo);
	console.log(typeof lightp);
}

gogaz.onclick = function(){
	var e = document.getElementById('e').value;
	var f = document.getElementById('f').value;
	var gogaz = document.getElementById('gogaz');
	var gazp = document.getElementById('gazp');
	var gazDo = e - f;
	var gazWat = parseFloat(counterImput);
	var gazRes = gazDo * gazWat;
	gazp.innerHTML = gazRes;
	console.log(gazRes)
}

$('#myModal').modal("hide");