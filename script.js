function firstNonRepeatedChar(str) {
 // Write your code here
	const arr=[];
	const a='a';
	const output=null;
	for(var i=0; i<str.length; i++){
		if(arr[str.charCodeAt(i)-a.charCodeAt(0)]==undefined){
			arr[str.charCodeAt(i)-a.charCodeAt(0)]=1;
		}
		else{
			arr[str.charCodeAt(i)-a.charCodeAt(0)]++;
		}
	}

	for(var i=0;i<arr.length;i++){
		if(arr[i]==1){
			output=String.fromCharCode(a.charCodeAt(0)+i);
			return output;
		}
	}
	return output;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
