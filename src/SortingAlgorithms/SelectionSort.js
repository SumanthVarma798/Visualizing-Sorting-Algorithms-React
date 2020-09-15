export default function SelectionSort(arr) {
  let length = arr.length;
  let dataArray = [];
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      dataArray.push([...arr]);
    }
  }
  return [dataArray, "O(n^2)"];
}
