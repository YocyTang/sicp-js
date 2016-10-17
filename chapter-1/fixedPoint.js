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
//利用不动点函数求一个数的根，平均阻尼
function sqr(x){
	return fixedPoint(function(y){
			return (y+x/y)/2	
	}, 1)
}

console.log(sqr(2))