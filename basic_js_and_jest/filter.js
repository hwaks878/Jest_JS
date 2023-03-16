// using filter method for arrays
// goes through each item in the array and the function will determine the condition to filter by
// if the condition is met, true, then it is stored in the new Array
// note: the original array is not changed

function moreThan(arrayItems) {
  const filterItems = arrayItems.filter((item) => {
    return item.price >= 100;
  });
  return filterItems;
}

module.exports = moreThan;
