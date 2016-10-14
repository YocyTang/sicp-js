function fib(n){
	return function fibIter(a, b, count){
		if(count == 0){
			return b
		}else {
			return fibIter(a+b, a, count-1)
		}
	}(1, 0, n)
}

console.log(fib(400))