function exp(b, n){
	if(n === 0){
		return 1
	}
	function isEven(n){
		return n%2 === 0
	}
	function sqr(n){
		return n*n
	}
	if(isEven(n)){
		return sqr(exp(b, n/2))
	}else {
		return b * (exp(b, n-1))
	}
}
console.log(exp(2, 3))
console.log(exp(2, 0))
console.log(exp(3, 77))