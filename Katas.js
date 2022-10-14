catInput1=document.querySelector("#cat-input-1");
catInput2=document.querySelector("#cat-input-2");
sol=document.querySelector("#solution");
catButton=document.querySelector("#cat-button")

let isPlayHidden=true
let isImgHidden=true
let isDescHidden=true

console.log(catInput1);

catInput1.addEventListener('input',solution);
catInput2.addEventListener('input',solution);

function solution(){
  start=catInput1.value;
  finish=catInput2.value;
  let rule = start.length>0 && finish.length>0 && !isNaN(parseInt(start)) && !isNaN(parseInt(finish))
  if (rule){
    sol.innerHTML = parseInt((finish-start)/3)+(finish-start)%3
  }
  else{
    sol.innerHTML = 0
  }
}

function showCatButton (){
    if (isPlayHidden){
        document.querySelector(".cat").style.display = "unset";
        catButton.innerHTML = "hide me(ow)"
    }
    else {
        document.querySelector(".cat").style.display = "none";   
        catButton.innerHTML = "play me(ow)"
    }
    isPlayHidden = !isPlayHidden
}

function showCatCode (){
    if (isImgHidden){
        document.querySelector("#cat-code").style.display = "unset";
        document.querySelector('#cat-code-button').innerHTML = "hide me(ow)"
    }
    else {
        document.querySelector("#cat-code").style.display = "none";
        document.querySelector('#cat-code-button').innerHTML = "show me(ow)"
    }
    isImgHidden=!isImgHidden
}

function showCatDesc (){
  if (isDescHidden){
      document.querySelector("#cat-desc-pic").style.display = "unset";
      document.querySelector("#cat-desc").innerHTML = "hide me(ow)"
  }
  else {
      document.querySelector("#cat-desc-pic").style.display = "none";   
      document.querySelector("#cat-desc").innerHTML = "show me(ow)"
  }
  isDescHidden = !isDescHidden
}