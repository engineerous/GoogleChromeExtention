//grey: '#152126', '#152126'
// window.onload = () => {
//     var m = document.createElement('meta'); 
//     m.name = 'theme-color'; 
//     m.content = '#152126'; 
//     document.head.appendChild(m);
//     console.log(m,m.content);
// }
window.addEventListener('DOMContentLoaded', (event) => {
    let el = document.querySelector("#button-1")
el.addEventListener("click", changeColor);

let el2 = document.querySelector("#button-2")
el2.addEventListener("click", changeColor);

let el3 = document.querySelector("#button-3")
el3.addEventListener("click", changeColor);

let el4 = document.querySelector("#button-4")
el4.addEventListener("click", changeColor);

let el5 = document.querySelector("#button-5")
el5.addEventListener("click", changeColor);

let el6 = document.querySelector("#button-6")
el6.addEventListener("click", changeColor);

});


function changeColor(e){
  console.log(this.value);
  console.log(formatCache)

   for (let i = 0; i < formatCache.length; i++)
   {

     let type = formatCache[i].type;
     let elementName = formatCache[i].element; 
     let prefix = '';
     if (type == "class")
     prefix = '.'
     else
     prefix = '#'
     let str = prefix+elementName
     console.log(str)
     let forElement = document.querySelector(str)
     console.log(forElement)
     //forElement.style.background = this.value;

   }







}

var formatCache = [ {type: "class", element: 'html'}, {type: "class", element: 'body'},{type: "class", element: 'main'}, {type: "class", element: 'yg51vc'}, {type: "class", element: 'LX3sZb'}, {type: "class", element:'KxwPGc.SSwjIe'}, {type: "class", element: 'dodTBe'}, {type: "class", element: 'o3j99.n1xJcf.Ne6nSd'},{type: "class", element: 'yg51vc'}, {type: "class", element:'o3j99.n1xJcf.Ne6nSd'},{type: "class", element: 'CvDJxb'}, {type:"class", element:'GLcBOb.mCRcc'},{type: "class", element:  'WE0UJf'}, {type:"class", element:'ZGomKf'},{type: "class", element: 'J1hqV'}, {type: "class", element:'sfbg'},{type: "id", element: 'footcnt'}]