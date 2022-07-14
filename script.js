
var element = document.body;
let input = document.querySelector(".form1");
var content = document.getElementsByClassName("content");

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginRight="0px";
}

function darkmode() {
 element.classList.toggle("dark-mode-bg");
}
  

function clearme(){
let list = document.getElementsByTagName("input")[0];
list.innerHTML = list.value;
list.value = '';

}
function function1() {
  if(input.value.length > 0) {
  let input = document.querySelector(".form1");
  var div = document. getElementById("create-div");
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var newdiv = document. createElement("div");
  newdiv.classList.add('content');
  newdiv. appendChild(ul);
  ul. appendChild(li);
  li. appendChild(document. createTextNode(`${input.value}`));
  div. appendChild(newdiv);
  clearme();
  } else{
    alert("enter your nots");
  }
}

input.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    function1();
    clearme();
  }
});

 function openContent(){
 }

