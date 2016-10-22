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

function myForEach(fn, items){
	while(items){
		fn(car(items))
		items = cdr(items)
	}
}

function display(list){
	while(list){
		console.log(car(list))
		list = cdr(list)
	}
}

var a = list(1,2,3,4,5)
myForEach(function(n){
	console.log(n*4)
}, a)


