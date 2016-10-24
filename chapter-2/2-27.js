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
		else{
			ret = cons(arr[i], ret)
		}
	}
	return ret
}
function isPairs(a){
 	try{
 		car(a)
 		return true
 	}catch(e){
 		return false 
 	}
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

 function deepReverse(a){
 	if(a === null){
 		return null
 	}else if(isPairs(a)){
 		return reverse(a)
 	}else{
 		return reverse(list(deepReverse(car(a)), deepReverse(car(cdr(a)))))
 	}
 }