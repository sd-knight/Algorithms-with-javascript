function InsertionSort(arr){
	var temp = 0;
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i + 1; j > 0; j--) {
			if (arr[j] < arr[j-1]) {
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			} else {
				break;
			}
		}
	}
}