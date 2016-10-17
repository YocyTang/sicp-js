function deriv(g){
	var dx = 0.00001
	return function(x){
		return (g(x+dx)-g(x))/dx
	}
}
function cube(x){
	return x*x*x
}
//x三次方在5处的导数
console.log(deriv(cube)(5))


function newtonTransform(g){
	return function(x){
		return x-(g(x)/(deriv(g),x))
	}
}

function method(g, guess){
	fixedPoint(newtonTransform(g), guess)
}