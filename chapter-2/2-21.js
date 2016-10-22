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

function myMap(fn, items){
	if(items === null){
		return null
	}else {
		return cons(fn(car(items)), myMap(fn(cdr(items))))
	}
}

function square(x){
	return x*x
}
function squareList1(list){
	if(list == null){
		return list
	}else {
		return cons(square(car(list)), squareList(cdr(list)))
	}
}	


function squareList2(list){
	return myMap(square, list)
}
