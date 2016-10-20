


function cons(x, y){
	return	function dispatch(m){
		if(m === 0){
			return x
		} else if( m === 1){
			return y
		}else {
			console.log(error)
		}
	}
}
function car(z){
	return z(0)
}
function cdr(z){
	return z(1)
}
function list(){
	var arr = [].slice.call(arguments)
	var n = arr.length
	var ret
	for(var i = n-1; i>=0; i--){
		if( i === n-1){
			ret = cons(arr[i], null)
		}
		ret = cons(arr[i],ret)
	}
	return ret
}


function lastPair(list){
	if(cdr(list) !== null){
		return lastPair(cdr(list))
	}else{
		return car(list)
	}
}

var a = list(23, 72, 149,34)
console.log(lastPair(a))