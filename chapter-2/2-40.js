function display(list){
	while(list){
		console.log(car(list))
		list = cdr(list)
	}
}
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
function append(a, b){
	if(a === null){
		return b
	}else{
		return cons(car(a), append(cdr(a), b))
	}
}
 function filter(fn, items){
 	if(items === null){
 		return null
 	}else if(fn(car(items))){
 		return cons(car(items), filter(fn, cdr(items)))
 	}else {
 		return filter(fn, cdr(items))
 	}
 }
  function accumulate(op, initial, items){
 	if(items === null){
 		return initial
 	}else {
 		return op(car(items), accumulate(op, initial, cdr(items)))
 	}
 }
 function myMap(fn, items){
 	if(items === null){
 		return null
 	}else{
 		
 		return	cons(fn(car(items)), myMap(fn,cdr(items)))
 	}
 	
 }

 function enumerateInt(low, high){
	if(low > high){
		return null
	}else {
		return cons(low, enumerateInt(low+1,high))
	}
}


function enumerateTree(tree){
	if(tree ===null){
		return null
	}else if(!isPairs(tree)){
		return list(tree)
	}else{
		return append(enumerateTree(car(tree)), enumerateTree(cdr(tree)))
	}
}


function flatMap(fn, items){
	return accumulate(append, null, myMap(fn, items))
}

//工具函数结束
//习题

function uniquePairs(n){
	return flatMap(function(x){
		return myMap(function(j){
			return list(x, j)
		}, enumerateInt(1, i-1))
	}, enumerateInt(1, n))
}