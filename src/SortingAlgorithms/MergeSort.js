function merge(A, temp, from, mid, to) {
  let k = from,
    i = from,
    j = mid + 1;
  while (i <= mid && j <= to) {
    if (A[i] < A[j]) {
      temp[k++] = A[i++];
    } else {
      temp[k++] = A[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = A[i++];
  }
  for (i = from; i <= to; i++) {
    A[i] = temp[i];
  }
}

export default function MergeSort(arr) {
  let dataArray = [];
  let low = 0;
  let high = arr.length - 1;
  let temp = [...arr];
  for (let m = 1; m <= high - low; m = 2 * m) {
    for (let i = low; i < high; i += 2 * m) {
      let from = i;
      let mid = i + m - 1;
      let to = Math.floor(Math.min(i + 2 * m - 1, high));
      merge(arr, temp, from, mid, to);
      dataArray.push([...arr]);
    }
  }
  return [dataArray, "O(nlog(n))"];
}
