

function countChange(penny, target){
	var pd= []  //构建数组用来存放所有状态
	var n = penny.length
	for(var i = 0; i <= n; i++){
		pd[i] = []
		pd[i][0] = 1
	}

	for(var j = 1; penny[0]*j <= target;j++){
		pd[0][penny[0]*j] = 1
	}
	
	for(var k = 1; k <= n; k++){
		for(var m = 0; m <= target; m++){
			if(m >=penny[k]){
				//分为两种情况，使用某种币和不使用某种币

				pd[k][m] = pd[k-1][m]+pd[k][m-penny[k]]
			}else {
				// 当目标数目小于某种币时，只有一种解法，也就是全部用前面的钱兑换
				pd[k][m] = pd[k-1][m]
			}
		}
	}

	return pd[n-1][target]
}
console.log(countChange([1,2,3,4,5,6,7,8,9,10], 1000))