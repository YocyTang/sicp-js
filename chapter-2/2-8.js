function subInterval(x, y){
	return makeInterval(abs(upper(x)-upper(y)), abs(lower(x)-lower(y)))
}