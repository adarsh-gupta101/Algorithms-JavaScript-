// Binary Search

const BinarySearch = (arr, search_Item,start,end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == search_Item) {
      return "Element found at index " + mid;
    } else if (arr[mid] < search_Item) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "Element not Found";
};

//Driver Code
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search_Item = 10;
let start = 0;
let end = arr.length - 1;

console.log(BinarySearch(arr, search_Item, start, end));
