function serachRoot(fn, left, right){
	function abs(x){
		if(x  < 0){
			return -x
		}else {
			return x
		}
	}
	function isClose(x, y){
		return abs(x-y)<0.001
	}
	var mid = (left +right)/2
	if(isClose(left, right)){
		return mid
	}
	var value = fn(left, right)
	if(value <0){
		return serachRoot(fn, mid, right)
	} else if(value >0){
		return serachRoot(fn, left, mid)
	}else {
		return mid
	}
}

var fun=  function(x){
	return x*x*x - 2*x -3
}
console.log(serachRoot(fun, 1,2))