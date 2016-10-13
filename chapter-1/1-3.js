function maxSum(x, y, z){
	if(x <= y && x <= z){
		return y +z
	}else if(y <= x && y <= z){
		return x + z
	}else {
		return x +y
	}

}
console.log(maxSum(1, 2, 3))
console.log(maxSum(0, 0, 0))
console.log(maxSum(2, 2, 4))
console.log(maxSum(3, 1, 2))
console.log(maxSum(6, 2, 2))
console.log(maxSum(2, 4, 2))
