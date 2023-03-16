function upperInArray(namesList){
    let newArray = [];  
    namesList.forEach(element => {
      //let up1 = element.toUpperCase();
      newArray.push(element.toUpperCase());
    });
    return newArray;
  }


  module.exports = upperInArray;