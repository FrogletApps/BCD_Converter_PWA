
//Converts a decimal number to binary coded decimal
function convert(){
    var numberToConvert = document.getElementById("numberToConvert").value;
	var inputStore = numberToConvert.split("");
	var resultStore = [];
	var errorStore = [];
	for (i=0; i<inputStore.length; i++){
        if (isNaN(inputStore[i])){
            errorStore.push(i);
        }
        var binary = resultStore[i] = parseInt(inputStore[i]).toString(2);
        var paddedBinary = binary.padStart(4, 0);
        resultStore[i] = paddedBinary + " ";
    }

    if (errorStore.length>1){
		document.getElementById("output").innerHTML = "The characters at positions "+errorStore.toString()+" are not numbers (first character is 0)";
	}
	else if (errorStore.length==1){
		document.getElementById("output").innerHTML = "The character at position "+errorStore.toString()+" is not a number (first character is 0)";
	}
	else{
		document.getElementById("output").innerHTML = "The number " + numberToConvert + " is " + resultStore.join("") + " in Binary Coded Decimal (BCD)";
    }
}