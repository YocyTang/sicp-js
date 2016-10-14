function multi(a, b){
	if(b === 0 || a === 0){
		return 0
	}else{
		return a+multi(a, b-1)
	}
}
function fastMulti(a, b){
	if(b === 0 || a === 0){
		return 0
	}
	function double(n){
		return n + n
	}
	function halve(n){
		return n /2
	}
	function isEven(n){
		return n%2 ===0
	}
	if(isEven(b)){
		return double(fastMulti( a, halve(b)))
	}else{
		return a+fastMulti(a, b-1)
	}
}
console.log(fastMulti(2,5))