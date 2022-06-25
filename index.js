

let link=document.getElementsByTagName("p");
let lang=Array.from(link);
console.log(lang);
for(let i=0, c=lang.length; i<c;i++){
  lang[i].addEventListener("click",function(e){
  console.log(e);
    e.target.nextElementSibling.style.visibility="visible";
    
  })
}
for(let i=0, c=lang.length; i<c;i++){
  lang[i].addEventListener("dblclick",function(e){
  console.log(e);
    e.target.nextElementSibling.style.visibility="hidden";
    
  })
}


