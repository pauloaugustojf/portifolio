const texto = document.querySelector("h1")
const header = document.querySelector("nav")
const articles = [...document.querySelectorAll(".slider article")]
let y = 0

function move(event){
  y = event.clientY
  const distY = 70
  if(y < distY){
    header.classList.remove("move")
  }else if (y > distY && window.scrollY > 0){
    header.classList.add("move")
  }
}

function scroll(event){
  if (window.scrollY > 0){
    texto.classList.add("move")
    header.classList.add("move")
  } else {
    texto.classList.remove("move")
    header.classList.remove("move")
  }
  
}

function removeclass(){
  articles.forEach((item) => (item.classList.remove(...item.classList)))
}

function click(event){
  removeclass()
  const item = event.target.tagName === "ARTICLE"? event.target: event.path.find(element => element.tagName === "ARTICLE")
  item.classList.add("active")
}

articles.forEach((item) => (
  item.addEventListener("click",click,true)
  ))

document.addEventListener("mousemove",move)
document.addEventListener("scroll",scroll)