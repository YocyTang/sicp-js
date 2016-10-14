function exp(b, n){
	function sqr(x){
		return x*x
	}
	function isEven(n){
		return n%2 === 0
	}
	return function expIter(b, n, a){
		if(n === 0){
			return a
		}
		if(isEven(n)){
			return expIter(sqr(b), n/2, a)
		}else {
			return expIter(b , (n-1), b*a)
		}
	}(b, n, 1)
}

console.log(exp(2, 4))
console.log(exp(2, 0))
console.log(exp(3, 77))