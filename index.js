

let link=document.getElementsByTagName("p");
console.log(link);
let lang=Array.from(link);
console.log(lang);
for(let i=0, c=lang.length; i<c;i++){
  lang[i].addEventListener("click",function(e){
  console.log(e);
    e.target.nextElementSibling.classList.toggle("show");
    
  })
}


// for(let i=0, c=lang.length; i<c;i++){
//   lang[i].addEventListener("dblclick",function(e){
//   console.log(e);
//     e.target.nextElementSibling.style.visibility="hidden";
    
//   })
// }

let btn=document.getElementById("btn");
let aside=document.getElementById("aside");
let shadow=document.getElementById("shadow");
let navigations=document.getElementById("navigations");

btn.addEventListener("click",function(e){
  aside.classList.toggle("hide");
  shadow.classList.toggle("cover");
  navigations.classList.toggle("expand");
})
