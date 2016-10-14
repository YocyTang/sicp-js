function multi(a, b){
	function isEven(n){
		return n%2 === 0
	}
	function double(n){
		return n +n
	}
	function halve(n){
		return n /2
	}
	return function multiIter(a, b, result){
		if(b === 0 || a ===0){
			return result
		}
		if(isEven(b)){
			return multiIter(double(a), halve(b), result)
		}else {
			return multiIter(a, b-1, a+result)
		}
	}(a, b, 0)
}

console.log(multi(2, 5))