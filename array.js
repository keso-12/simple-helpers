// search array based on key and search term (array of objects, object key to search, search term)
export const handleKeySearch = (arrayList, key, term) =>
  arrayList.filter(
    (array) =>
      array[key] &&
      String(array[key]).toLowerCase().includes(term.toLowerCase())
  );

//set a known shared key to merge both arrays to one
export const mergeArrayByKey = (array1, array2, key) =>
  array1.map((arr1) => {
    const values = array2.some((arr2) => arr2[key] === arr1[key]);
    return [...arr1, ...values];
  });
