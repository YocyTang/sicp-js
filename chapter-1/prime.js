//费马小定理检测素数
// 如果n是一个素数，
//a是小于n的任意正整数，那么a的n次方与a模n同余

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
var count = 0
for(var i = 2; i < 100000;i++){
	if(isPrime(i)){
		console.log(i)
		count++
	}
}
console.log("共有"+count+"位素数")