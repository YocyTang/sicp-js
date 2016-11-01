function balance(x){
	var count = x;
	return function(y){
		if(count - y >=0){
			count = count-y
			return count
		}else{
			console.log("I am sorry!")
			return count
		}
	}
}

var withdraw = balance(100)
console.log(withdraw(20))
console.log(withdraw(20))
console.log(withdraw(40))
console.log(withdraw(50))
console.log(withdraw(20))