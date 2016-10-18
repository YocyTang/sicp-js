function zero(){
	return function(m){
		return function (x){
			return x
		}
	}
}

function add_1(n){
	return function (f){
		return function(x){
			return f(n(f)(x))
		}
	}
}

function one(){
	return function(f){
		return function (x){
			return f(x)
		}
	}
}