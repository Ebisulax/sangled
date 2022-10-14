const catInput1 = document.querySelector("#cat-input-1");
const catInput2 = document.querySelector("#cat-input-2");
const sol = document.querySelector("#solution");
const catButton = document.querySelector("#cat-button");

let isPlayHidden = true;
let isImgHidden = true;
let isDescHidden = true;

catInput1.addEventListener('input', solution);
catInput2.addEventListener('input', solution);

function solution(){
  let start = catInput1.value;
  let finish = catInput2.value;
  let areInputsValid =
    start.length > 0 &&
    finish.length > 0 &&
    !isNaN(parseInt(start)) &&
    !isNaN(parseInt(finish));
  if (areInputsValid) {
    sol.innerHTML = parseInt((finish-start)/3)+(finish-start)%3;
  } else {
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