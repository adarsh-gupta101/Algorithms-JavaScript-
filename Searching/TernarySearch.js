// Ternary Search

const TernarySearch = (arr, search_Item, start, end) => {
  while (start <= end) {
    let mid1 = Math.floor(start + (end - start) / 3);
    let mid2 = Math.floor(end - (end - start) / 3);

    if (arr[mid1] == search_Item) {
      return "Element found at index " + mid1;
    } else if (arr[mid2] == search_Item) {
      return "Element found at index " + mid2;
    } else if (arr[mid1] > search_Item) {
      end = mid1 - 1;
    } else if (arr[mid2] < search_Item) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
};

//Driver Code
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search_Item = 2;
let start = 0;
let end = arr.length - 1;

console.log(TernarySearch(arr, search_Item, start, end));
