function seniorList(array) {
  return (newArray = array.map((array) => {
    if (array[0] > 54 && array[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  }));
}

/* function seniorListChg(array) {
  return array.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
} */

module.exports = seniorList;
/* module.exports = seniorListChg; */
