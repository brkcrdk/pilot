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
