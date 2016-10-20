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


function makeIterval(x, y){
	return cons(x, y)
}
function upper(a){
	return car(a)
}
function lower(a){
	return cdr(a)
}
function addInterval(x, y){
	return makeIterval(cons(upper(x)+upper(y)),(lower(x)+lower(y)))
}
