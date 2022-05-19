//grey: '#152126', '#152126'
// window.onload = () => {
//     var m = document.createElement('meta'); 
//     m.name = 'theme-color'; 
//     m.content = '#152126'; 
//     document.head.appendChild(m);
//     console.log(m,m.content);
// }



const el1 = document.querySelector(".button-1");
const el2 = document.querySelector(".button-2");
const el3 = document.querySelector(".button-3");
const el4 = document.querySelector(".button-4");
const el5 = document.querySelector(".button-5");
const el6 = document.querySelector(".button-6");
el1.addEventListener("click", changeColor());
el2.addEventListener("click", changeColor());
el3.addEventListener("click", changeColor());
el4.addEventListener("click", changeColor());
el5.addEventListener("click", changeColor());
el6.addEventListener("click", changeColor());


function changeColor() {
    console.log(this.value); 
    console.log("running changeColor Function")
}