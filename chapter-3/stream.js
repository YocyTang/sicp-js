function isPrime(n){
	function sqr(x){
		return x*x
	}
	function isEven(n){
		return n%2 === 0
	}

	//一个数的幂对另一个数取模
	function mod(base, exp, m){
		if(exp === 0){
			return 1
		}
		if(isEven(exp)){
			return sqr(mod(base, exp/2, m)) % m
		}else {
			return (base*mod(base, (exp-1), m))%m
		}
	}
	function test(a){

		return mod(a, n, n) === a
	}
	
	var times = 100
	return function prime(){
		var data = Math.floor((n-2)*Math.random())+1
		if(times === 0){
			return true
		}
		if(!test(data)){
			return false
		}
		times-=1
		//进行一百次递归检测
		return prime()
	}()
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

function delay(x){
	return function (){
		return x;
	}
}
function force(fn){
	return fn();
}
function consS(x, y){
	return cons(x, delay(y))
}
function carS(stream){
	return car(stream);
}
function cdrS(stream){
	return force(cdr(stream))
}

function streamFilter(fn, stream){
	if(stream === null){
		return null;
	}
	if(fn(carS(stream)) === true){
		return consS(carS(stream), streamFilter(fn, cdrS(stream)))
	}
	return streamFilter(fn, cdrS(stream))
}
function streamEnumerateInterval(low, high){
	if(low >high){
		return null
	}
	return consS(low, streamEnumerateInterval(low+1, high))
	
}


var a = consS(4,5)

console.log(cdr(a)())