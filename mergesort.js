function merge(arr, aux, low, mid, high){
	for (let i = low; i <= high; i++)
		aux[i] = arr[i];

	let i = low, j = mid + 1;
	for (let index = low; index <= high; index++){
		if (i > mid) arr[index] = aux[j++];
		else if (j > high) arr[index] = aux[i++];
		else if (aux[j] < aux[i]) arr[index] = aux[j++];
		else arr[index] = aux[i++];
	}
}

function mergesort(arr, aux, low, high){
	if (!aux) return mergesort(arr, arr.slice(0), 0, arr.length - 1);
	if (high <= low) return;

	const mid = low + ~~((high - low) / 2);
	mergesort(arr, aux, low, mid);
	mergesort(arr, aux, mid + 1, high);

	merge(arr, aux, low, mid, high);

	return arr;
}


console.log(mergesort([4,7,1,78,8,2,3,7,9,2,10,0,1,6]));

