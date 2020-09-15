function swap(items, leftIndex, rightIndex, dataArray) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  dataArray.push([...items]);
}
function partition(items, left, right, dataArray) {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j, dataArray);
      i++;
      j--;
    }
  }
  return i;
}

export default function QuickSort(
  items,
  left = 0,
  right = items.length - 1,
  dataArray = []
) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, dataArray);
    if (left < index - 1) QuickSort(items, left, index - 1, dataArray);
    if (index < right) QuickSort(items, index, right, dataArray);
  }
  return [dataArray, "O(nlog(n))"];
}
