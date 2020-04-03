
/**
 * Answer to Question 1 
 * define object literal named person
 */
"use strict";


 const person = {
      'name' : "",
      'dateOfBirth' :"",
      'setName': function(name){
        this.name = name;
      },
      'getName':function(){
       return this.name;
      }

 };

//create new person object from person

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = "December 10, 1998";

//print out the console about john object
console.log("The person's name is " +john.getName());

const date = Date.parse(john.dateOfBirth);
const sDate = new Date(date);
console.log(john.getName()+ " was born on " + sDate);

/**
 * Answer to Question 2
 * apply javascript inheritance to create
 * generic object name employee
 */

 const employee = Object.create(person);
 employee.salary = "0.0";
 employee.hireDate = new Date();
 employee.doJob = function(title){
      console.log(this.getName() + " is a " + title + " who earns "+ employee.salary);
 };

 employee.name = "Anna";
 employee.salary = "$249.995.50";
 employee.doJob("programmer");

/**
 * Answer to Question 3
 * use Constructor function to declare object Person
 */

 function Person(name , dof){
   this.name = name;
    this.dateOfBirth = dof;
    
   
 }
 Person.prototype.toString = function(){
     return "{Name: " + this.getName() + ", DateOfBirth: "+this.dateOfBirth+ "}";
 };
Person.prototype.getName = function(){
    return this.name;
   };
Person.prototype.setName = function(name){
    this.name = name;
  };

 //create object obj1 using function constructor
 const obj1 = new Person("Peter" , "November 10, 1985");
 
 //print out to console
 console.log(obj1.toString());

