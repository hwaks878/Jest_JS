function sumNumbersArray(array){
    let total = 0;
    array.forEach(element => {
        total = total + element;
    });
    return total;
};

module.exports = sumNumbersArray;

