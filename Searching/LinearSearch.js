// Linear Search

const LinearSearch = (arr,search_Item) => {
  let searchItem = search_Item;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchItem) {
      return "Element found at index " + i;
    }
  }
  return "Element not Found";
};


// Driver Code
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search_Item = 5;
console.log(LinearSearch(arr,search_Item));