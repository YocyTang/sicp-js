//27页 1.11
//递归计算
function fun1(n){
	if(n < 3){
		return n
	}else {
		return fun1(n-1)+2*fun1(n-2)+3*fun1(n-3)
	}
}
console.log(fun1(15))
//迭代计算
function fun2(n){
	return function funIter(a, b, c, count){
		if(count < 3){
			return a
		} else {
			return funIter(a+2*b+3*c, a,b, count-1)
		}
	}(2, 1, 0, n)
	
}
console.log(fun2(15))