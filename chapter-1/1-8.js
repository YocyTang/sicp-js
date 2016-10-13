function cubeRoot(x){
	
	// 自定义的绝对值函数
	function myAbs(x){
		if(x < 0){
			return -x
		}else {
			return x
		}
	}

	
	//
	function cube(x){
		return x*x*x
	}

	//优化猜测值
	function improve(guess, x){
		return ((x/(guess*guess))+2*guess)/3
	}

	//检测条件
	function goodEnough(guess){
		var std = 0.000001
		var cond = myAbs(cube(guess) - x)
		if(cond <= std){
			return true
		}else {
			return false
		}
	}

	//迭代求值
	function cubeIter(guess, x){
		if(goodEnough(guess, x)){
			return guess
		}else {
			return cubeIter(improve(guess, x), x)
		}
	}
	return cubeIter(1, x)
}




console.log(cubeRoot(8))
