function factorial(x){
	function iterFac(a, b, n){
		if(b > n){
			return a
		}else {
			return iterFac(a * b, b + 1, n)
		}
	}
	return iterFac(1, 1, x)
}

console.log(factorial(10))