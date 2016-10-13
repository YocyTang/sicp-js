/*
	牛顿迭代法求平方根，只用加减乘除基本运算
	思想：初始猜测值除以所求值，用所得的商与初始值求平均
		这样逼近真值
	guess = (guess/target+target)/2
*/
function mySqrt(x){
	//排除负数
	if(x < 0){
		console.log("error")
		return 
	}
	// 自定义的绝对值函数
	function myAbs(x){
		if(x < 0){
			return -x
		}else {
			return x
		}
	}

	// 平均数
	function average(m, n){
		return (m+n)/2
	}
	//平方
	function mySquare(x){
		return x*x
	}

	//优化猜测值
	function improve(guess, x){
		return average(guess, x/guess)
	}

	//检测条件
	function goodEnough(guess){
		var std = 0.000001
		var cond = myAbs(mySquare(guess) - x)
		if(cond <= std){
			return true
		}else {
			return false
		}
	}

	//迭代求值
	function sqrtIter(guess, x){
		if(goodEnough(guess, x)){
			return guess
		}else {
			return sqrtIter(improve(guess, x), x)
		}
	}
	return sqrtIter(1, x)
}




console.log(mySqrt(11000000010))


