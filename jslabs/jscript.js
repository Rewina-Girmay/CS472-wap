
/* Answer for question 6 
  * module to define count object with 
  * two methods: 
*/
"use strict"

const count =(function () {
    let counter = 0;
    const add = function () {
       return ++counter;
    };
    const reset =function () {
      return  counter=0;
    };
    return{ 'add':add , 'reset':reset};
}
  
)();

//test the result set
//incriment by one
console.log(count.add());
console.log(count.add());
console.log(count.add());

//reset the value to zero
console.log(count.reset());



 /**
  * Answer to question 8
  * add a function to increment value by some
  * value passed as parameter
  */

  const make_adder =  function(num) {
        let val = 0;
        return function(){
            return val += num;
        } 
  };

  let add5 = make_adder(5);
  add5();
  add5();
  console.log(add5()); // return 15

  let add7 = make_adder(7);
  add7();
  add7();
  console.log(add7()); //retuen 21

/**Question 10
 * Revealing module pattern
 * That creates employee object
 */

 const employee = (function(){
      let name;
      let age;
      let salary;

      const getName = function getName(){
    return name;
    };
      const getAge = function getAge(){
      return age;
    };
    const getSalary = function getSalary(){
      return salary;
    };

    const setname = function setName(n){
        name = n;
      //  getName();
    };
     const setage = function setAge(a){
     age = a;
  };
  const setsalary = function setSalary(s){
      salary = s;
  };

   const increasSalary = function increasSalary(p){
       return  getSalary()+(getSalary() * p);
   };
   const incrementAge = function incremetAge(){
    return getAge() + 1;
};
   return{
    setName:setname,
    setAge:setage,
    setSalary:setsalary,
    increaseSalary:increasSalary,
    increamentAge:incrementAge
};
    
 }
 )();
//set the salary and make the increament
employee.setSalary(1000);
console.log(employee.increaseSalary(0.2));


employee.setAge(23);
console.log(employee.increamentAge());

/**
 * Question 11 Extend the module of question 10
 * to have  public method and field
 */

 employee.address="";
 employee.setAddress = function(add){
    employee.address=add;
 };

 employee.getAddress = function(){
     return employee.address;
 };

employee.setAddress("1000 nth street");
console.log(employee.getAddress());
