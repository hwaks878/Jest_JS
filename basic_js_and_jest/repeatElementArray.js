function repeatElementArray(namesList){
    let newArray = [];  
    namesList.forEach(element => {
      newArray.push(element);
      newArray.push(element);
    });
    return newArray;
  }

  module.exports = repeatElementArray;

