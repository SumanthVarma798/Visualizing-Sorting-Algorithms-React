let array_length;
/* to create MAX  array */
function heap_root(input, i, dataArray) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) max = left;
  if (right < array_length && input[right] > input[max]) max = right;
  if (max !== i) {
    swap(input, i, max, dataArray);
    heap_root(input, max, dataArray);
  }
}

function swap(input, index_A, index_B, dataArray) {
  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
  dataArray.push([...input]);
}

export default function HeapSort(input) {
  array_length = input.length;
  let dataArray = [];

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i, dataArray);
  }
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i, dataArray);
    array_length--;
    heap_root(input, 0, dataArray);
  }
  return [dataArray, "O(nlog(n))"];
}
