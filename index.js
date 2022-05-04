//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scope={
    scope:["scope is of four types: Global,Local,Block,Lexical","Global Scope:the scope that contains, and is visible in, all other scopes","Local Scope:Local Scope occurs when you create a variable inside a function","Block Scope:This scope restricts the variable that is declared inside a specific block, from access by the outside of the block","Lexical Scope:a variable defined outside a function can be accessible inside another function defined after the variable declaration. "]
  }
    localStorage.setItem("scope",JSON.stringify(scope));
  
    var hoisting={
    hoisting:["Hoisting: Hoisting is JavaScript's default behavior of moving declarations to the top.","In JavaScript, a variable can be declared after it has been used.","In other words; a variable can be used before it has been declared.","Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)."]
      }
      localStorage.setItem("hoisting",JSON.stringify(hoisting));
 
      var constructor_fn={
          constructor_Functions:["Constructor function:a constructor function is used to create objects. ","A constructor is a special function that creates and initializes an object instance of a class"," a constructor gets called when an object is created using the new keyword.","The purpose of a constructor is to create a new object and set values for any existing object properties."]
      }
      localStorage.setItem("constructor_function",JSON.stringify(constructor_fn));
 
     var prototype={
     prototype:["Prototype: an object that is associated with every functions and objects by default in JavaScript,","function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible."," Every function includes prototype object by default.","The prototype property allows you to add properties and methods to any object (Number, Boolean, String and Date, etc.)"]
     }

     localStorage.setItem("prototype",JSON.stringify(prototype));
 
 function scopefn(){
   var scope=JSON.parse(localStorage.getItem(  "scope"));
  document.querySelector("#data").innerHTML="";
  document.querySelector("#video").innerHTML="";
 //  console.log scope);
 var uList=document.createElement("ul");
 uList.setAttribute("id","unorderedlist");
 var head=document.createElement("h3");
 head.innerText=  "Scope";
 head.setAttribute("id","heading");

scope.scope.forEach(element=>{
   var listData=document.createElement("li");
   listData.innerText=element;
   listData.setAttribute("class","listItems");
   uList.append(listData);

 })
document.querySelector("#data").append(head,uList);
 document.querySelector("#data").append(head,uList);
 var video=document.createElement("iframe");
 video.setAttribute("src","./scope.mp4");
 video.setAttribute("id","ivideo");
 document.querySelector("#video").append(video);

 }
 function hoistingfn(){
  
   var hoisting=JSON.parse(localStorage.getItem(  "hoisting"));
   document.querySelector("#data").innerHTML="";
   document.querySelector("#video").innerHTML="";
  //  console.log hoisting);
  var uList=document.createElement("ul");
  uList.setAttribute("id","unorderedlist");
  var head=document.createElement("h3");
  head.innerText=  "Hoisting";
  head.setAttribute("id","heading");

 hoisting.hoisting.forEach(element=>{
    var listData=document.createElement("li");
    listData.innerText=element;
    listData.setAttribute("class","listItems");
    uList.append(listData);

  })
document.querySelector("#data").append(head,uList);
  document.querySelector("#data").append(head,uList);
  var video=document.createElement("iframe");
  video.setAttribute("src","./hoisting.mp4");
  video.setAttribute("id","ivideo");
  document.querySelector("#video").append(video);



 }
 function constructorfn(){

   var constructor_fn=JSON.parse(localStorage.getItem("constructor_function"));
   document.querySelector("#data").innerHTML="";
   document.querySelector("#video").innerHTML="";
  //  console.log constructor_fn);
  var uList=document.createElement("ul");
  uList.setAttribute("id","unorderedlist");
  var head=document.createElement("h3");
  head.innerText=  "Constructor_fn";
  head.setAttribute("id","heading");

 constructor_fn.constructor_Functions.forEach(element=>{
    var listData=document.createElement("li");
    listData.innerText=element;
    listData.setAttribute("class","listItems");
    uList.append(listData);

  })
document.querySelector("#data").append(head,uList);
  document.querySelector("#data").append(head,uList);
  var video=document.createElement("iframe");
  video.setAttribute("src","./constructor.mp4");
  video.setAttribute("id","ivideo");
  document.querySelector("#video").append(video);


 }
 function prototypes(){

   var prototype=JSON.parse(localStorage.getItem("prototype"));
   document.querySelector("#data").innerHTML="";
   document.querySelector("#video").innerHTML="";147
  //  console.log prototype);
  var uList=document.createElement("ul");
  uList.setAttribute("id","unorderedlist");
  var head=document.createElement("h3");
  head.innerText=  "Prototype";
  head.setAttribute("id","heading");

 prototype.prototype.forEach(element=>{
    var listData=document.createElement("li");
    listData.innerText=element;
    listData.setAttribute("class","listItems");
    uList.append(listData);

  })
document.querySelector("#data").append(head,uList);
  document.querySelector("#data").append(head,uList);
  var video=document.createElement("iframe");
  video.setAttribute("src","./prototype.mp4");
  video.setAttribute("id","ivideo");
  document.querySelector("#video").append(video);




 }