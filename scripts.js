//grey: '#152126', '#152126'
// window.onload = () => {
//     var m = document.createElement('meta'); 
//     m.name = 'theme-color'; 
//     m.content = '#152126'; 
//     document.head.appendChild(m);
//     console.log(m,m.content);
// }


let el = document.querySelector("#button-1")
el.addEventListener("click", myFunction);

let el2 = document.querySelector("#button-2")
el2.addEventListener("click", myFunction);

let el3 = document.querySelector("#button-3")
el3.addEventListener("click", myFunction);

let el4 = document.querySelector("#button-4")
el4.addEventListener("click", myFunction);

let el5 = document.querySelector("#button-5")
el5.addEventListener("click", myFunction);

let el6 = document.querySelector("#button-6")
el6.addEventListener("click", myFunction);

function myFunction(e){
  console.log(this.value);
}

