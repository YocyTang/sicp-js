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

function abs(x){
	return x < 0 ? -x : x
}

function makeRat(x, y){

	if(x*y<0){
		return	cons(-(abs(x)), abs(y))
	} else {
		return cons(abs(x), abs(y))
	}
}

function getNumber(x){
	return car(x)
}
function getDenom(x){
	return cdr(x)
}


var a = makeRat(-5, -19)
console.log(car(a))
console.log(cdr(a))

var b = makeRat(5, -9)
console.log(car(b))
console.log(cdr(b))