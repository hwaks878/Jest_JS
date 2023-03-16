/* function print(value) {
  console.log(value);
}

print("Hello World"); */

function useCallBack(callBack) {
  callBack("Hello");
}

useCallBack((value) => console.log(value));

/* function printPerson(person) {
  console.log(person);
}

const person = { name: "Andy" };
printPerson(person.name); */
