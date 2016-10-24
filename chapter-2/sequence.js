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



 //filter

 function filter(fn, items){
 	if(items === null){
 		return null
 	}else if(fn(car(items))){
 		return cons(car(items), filter(fn, cdr(items)))
 	}else {
 		return filter(fn, cdr(items))
 	}
 }

 //test filter
 function isOdd(a){
 	return a%2 !== 0
 }
 var a = list(1,2,3,4,5,6)
 //display(filter(isOdd, a))



 // accumulate
 function accumulate(op, initial, items){
 	if(items === null){
 		return initial
 	}else {
 		return op(car(items), accumulate(op, initial, cdr(items)))
 	}
 }

 //test accumutate

 function add(x, y){
 	return x+y
 }
 function mul(x, y){
 	return x*y
 }
 var a = list(1,2,3,4,5)
 //console.log(accumulate(add, 1, a))
 //console.log(accumulate(mul, 1, a))
 //display(accumulate(cons, null, a))



 function myMap(fn, items){
 	if(items === null){
 		return null
 	}else{
 		
 		return	cons(fn(car(items)), myMap(fn,cdr(items)))
 	}
 	
 }

 //test map
 function foo(x){
 	return x*2
 }
 //display(myMap(foo, a))

// enumerate


function enumerateInt(low, high){
	if(low > high){
		return null
	}else {
		return cons(low, enumerateInt(low+1,high))
	}
}
//test enumerateInt
//display(enumerate(2,7))
function enumerateTree(tree){
	if(tree ===null){
		return null
	}else if(!isPairs(tree)){
		return list(tree)
	}else{
		return append(enumerateTree(car(tree)), enumerateTree(cdr(tree)))
	}
}

//test enumerateTree

var b= list(1,2,3,list(5,7))

//display(enumerateTree(b))



//利用上面的基础函数求fib的偶数，filter，map，accumulate， enumrate
function fib(n){
	return function fibIter(a, b, count){
		if(count === 0){
			return b
		}else {
			return fibIter(a+b, a, count-1)
		}
	}(1, 0, n)
}

function oddFib(n){
	return accumulate(cons, null, filter(isOdd, myMap(fib,enumerateInt(0,n))))
}
display(oddFib(10))