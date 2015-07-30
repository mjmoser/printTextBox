function printStuffFunction() {
	var input = document.getElementById ("thingToGet");
	var output = document.getElementById ("placeToPutStuff");
	var total = 100;
	var count = 1; 
	
	output.innerHTML = ""; 
	
	while (count <= total){
		output.innerHTML += input.value;
		count++;
	}
}
