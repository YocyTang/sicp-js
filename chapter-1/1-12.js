function pasika(n){
	var arr = []
	for(var i =0; i < n; i++){
		arr[i] = []
	}
	arr[0][0] = 1
	arr[1][0] = 1
	arr[1][1] = 1
	for(var k = 1; k < n; k++){
		for(var j = 1; j< k; j++){			
			arr[k][j] = arr[k-1][j-1]+arr[k-1][j]
			arr[k][0] = arr[k][k] = 1
		}
	}
	console.log(arr)
}
pasika(15)