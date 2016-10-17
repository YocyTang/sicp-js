function fixedPoint(fn, firstTry){
	var tolerance = 0.000001
	function abs(x){
		if(x<0){
			return -x
		}else {
			return x
		}
	}
	function isClosed(a, b){
		return abs(a-b)<tolerance
	}
	return function try(guess){
		var next = fn(guess)
		if(isClosed(guess, next)){
			return next
		}else {
			return try(next)
		}
	}(firstTry)
}

