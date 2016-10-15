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


function runtime(fn){
	var start = (new Date()).getTime()
	fn()
	var end = (new Date()).getTime()
	return end-start	
}


function findOdd(n){
	if(n%2 === 0){
		return n+1
	}else {
		return n+2
	}
}

function threePrime(start){
	var arr = []
	return function helper(start){	
		var k = findOdd(start)		
		if(isPrime(k)){
			arr.push(k)
			if(arr.length === 3){
				return arr
			}else {
				return helper(k)
			}
		}else{
			return helper(k)
		}
	}(start)
}
console.log(threePrime(1000))
console.log(threePrime(10000))
console.log(threePrime(100000))
console.log(threePrime(1000000))
console.log(threePrime(1000000))
