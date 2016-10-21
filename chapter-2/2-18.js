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
		else {
			ret = cons(arr[i],ret)
		}
	}
	return ret
}


function reverse(list){
	function iter(list, res){
		if(list === null){
			return res
		}else{
			return iter(cdr(list), cons(car(list), res))
		}
	}
	return iter(list, null)
}

a = list(1,2,3,4,5)
b = reverse(a)
while(b !== null){
	console.log(car(b))
	b = cdr(b)
}