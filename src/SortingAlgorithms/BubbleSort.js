export default function BubbleSort(arr) {
  let n = arr.length;
  let dataArray = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        dataArray.push([...arr]);
      }
    }
  }
  return [dataArray, "O(n^2)"];
}
