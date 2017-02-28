function BubbleSort(arr){
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = arr.length - 1; j > i; j--) {
			if (arr[j] < arr[j-1]) {
				temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
}