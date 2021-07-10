function sayHello(name, surname) {
  const text= "Hello" + name +''+ surname;

  console.log(text);
  alert(text);
}

const userName = prompt ("What is your name?");
const userSurname = prompt ("What is your surname?");

sayHello(userName,userSurname);
