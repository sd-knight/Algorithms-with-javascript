function ShellSort(arr) {
	var l = arr.length, temp = arr[0];
	var h = 1;
	while (h < l) h = h*3+1;
	while(h>=1) {
		for (var i = h; i < l; i++) {
			for (var j = i; j > 0; j-=h) {
				if (arr[j] < arr[j-h]) {
					temp = arr[j];
					arr[j] = arr[j-h];
					arr[j-h] = temp;
				} else {
					break;
				}
			}
		}
		h = Math.floor(h/3);
	}
}