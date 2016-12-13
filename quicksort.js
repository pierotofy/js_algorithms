function partition(arr, low, high){
	let i = low,
		j = high + 1;
	while(true){
		while(arr[++i] < arr[low] && !(i == high));
		while(arr[--j] > arr[low] && !(j == low));

		if (i >= j) break;
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	[arr[low], arr[j]] = [arr[j], arr[low]];
	return j;
}

function quicksort(arr, low, high){
	if (low === undefined) quicksort(arr.sort(n => Math.random() > 0.5 ? 1 : -1), 0, arr.length - 1);

	if (low < high){
		pivot = partition(arr, low, high);
		quicksort(arr, low, pivot - 1);
		quicksort(arr, pivot + 1, high);
	}

	return arr;
}

let a = [4,7,1,78,8,2,3,7,9,2,10,0,1,6];
console.log(quicksort(a));
