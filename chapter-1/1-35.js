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
	return function tryTest(guess){

		var next = fn(guess)
		if(isClosed(guess, next)){
			return next
		}else {
			return tryTest(next)
		}
	}(firstTry)
}


function ratio(){
	return fixedPoint(function(x){
		return 1+1/x
	}, 1)
}
console.log(ratio())