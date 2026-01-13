var name = "Aditya Verma";
console.log(this.name);


var func = () => { alert("Click is working"); }
document.addEventListener("click",()=> {
   func();
    console.log("working");
})
