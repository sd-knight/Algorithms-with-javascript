function SelectionSort(arr) {
	var temp = 0, min = 0;
	for (var i = 0; i < arr.length; i++) {
		min = i;
		for (var j = i; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
}