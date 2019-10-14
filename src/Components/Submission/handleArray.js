//This function gets 2 parameters
//First parameter=> an array that we want to split up
//Second patameter=> how many array to return
export const handleArray = (arr, count) => {
  const arrayLength = Math.max(arr.length / count, 1);
  const newArray = [];
  for (let i = 0; i < count; i++) {
    if (arrayLength * (i + 1) <= arr.length) {
      newArray.push(arr.slice(arrayLength * i, arrayLength * (i + 1)));
    }
  }
  return newArray;
};
