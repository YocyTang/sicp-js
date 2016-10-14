function fib(n){
	function isEven(n){
		return n%2 === 0
	}
	function sqr(n){
		return n*n
	}
	return function fibIter(a, b, p, q, n){
		if(n===0){
			return b
		}
		if(isEven(n)){
			return fibIter(a, b, (sqr(p)+sqr(q)), ((2*p*q)+sqr(q)), n/2)
		}else {
			return fibIter((b*q+a*q+a*p), (b*p+a*q), p, q, n-1)
		}
	}(1, 0, 0, 1, n)
}

console.log(fib(500))