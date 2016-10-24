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
 function display(list){
	while(list){
		console.log(car(list))
		list = cdr(list)
	}
		
 }
function isPairs(a){
 	try{
 		car(a)
 		return true
 	}catch(e){
 		return false 
 	}
 }
function leaves(a){
	
	try{
		if( a === null){
			return 0
		}

		else if(!isPairs(a)){
			return 1
		}else{
			return leaves(car(a))+leaves(cdr(a))
		}
	}catch(e){
		console.log("List or cons is requied")
	}
}

var a = list(cons(2,4), cons(3,2),1)

console.log(leaves(a))