function simpson(f, a, b, n){
	var h = (b-a)/n
	function y(k){
		f = a+k*h
	}
	function factor(k){
		if(k == 0 || k == n){
			return  1
		}else if(k%2!==0){
			return 4
		}else {
			2
		}
	}
	function term (k){
		return factor(k)*y(k)
	}
	function next(k){
		return k+1
	}
	if(n%2 !== 0){
		console.log("error")
	}else {
		return (h/3)*sum(term())
	}
}