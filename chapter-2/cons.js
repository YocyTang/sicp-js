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
 function isPairs(a){
 	try{
 		if((typeof(car(a))=='number') &&(typeof((cdr(a)==='number'))|| cdr(a) === null)){
 			return true
 		}else{
 			return false
 		}
 	}catch(e){
 		return false 
 	}
 }
var a = list(1,2,3)

console.log(isPairs(cons(1,2)))
console.log(isPairs(cons(1,null)))
console.log(isPairs(cons(null, 1)))
console.log(isPairs(1))