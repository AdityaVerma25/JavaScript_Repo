var name = "Aditya Verma";
console.log(this.name);


// crating and adding element

//creating 
var h1 = document.createElement('h1');
h1.textContent = "This is h1 tag";
h1.classList.add("text");

document.querySelector("body").appendChild(h1);


//for remove 
h1.remove();