//序对and list的length
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
function listLength(a){
	try{
		if(a !== null){
			return listLength(cdr(a))+1
		}else{
			return 0
		}
	}catch(e){
		console.log("A list or cons is required")
	}
}
var a = list(1,2,3,4)
var b = list(cons(1,3),cons(1,2))
var c = list(1,cons(1,2),4)
console.log(listLength(a))
console.log(listLength(b))
console.log(listLength(c))