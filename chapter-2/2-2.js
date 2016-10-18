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



function makeSegment(x, y){
	return cons(x , y)
}
function startPoint(x){
	return car(x)
}
function endPoint(x){
	return cdr(x)
}

function midPoint(x){
	var x = (car(car(x))+car(cdr(x)))/2
	var y = (car(cdr(x))+cdr(cdr(x)))/2
	return cons(x, y)	
}


