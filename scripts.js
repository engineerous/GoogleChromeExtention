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
  console.log(formatCache)
}

var formatCache = [ {type: "class", element: 'html'}, {type: "class", element: 'body'},{type: "class", element: 'main'}, {type: "class", element: 'yg51vc'}, {type: "class", element: 'LX3sZb'}, {type: "class", element:'KxwPGc.SSwjIe'}, {type: "class", element: 'dodTBe'}, {type: "class", element: 'o3j99.n1xJcf.Ne6nSd'},{type: "class", element: 'yg51vc'}, {type: "class", element:'o3j99.n1xJcf.Ne6nSd'},{type: "class", element: 'CvDJxb'}, {type:"class", element:'GLcBOb.mCRcc'},{type: "class", element:  'WE0UJf'}, {type:"class", element:'ZGomKf'},{type: "class", element: 'J1hqV'}, {type: "class", element:'sfbg'},{type: "class", element: '#footcnt'}]