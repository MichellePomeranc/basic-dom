const header = document.createElement("h1")
header.innerHTML = "The Ball Game"
header.style.color = "#9542f5"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")
document.getElementById("container").style.marginTop="100px"

const subHeader=document.createElement("h2")
subHeader.innerHTML="By Michelle Pomeranc"
subHeader.style.color="blue"
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)
subHeader.setAttribute("class", "my-sub-header")

let ball = document.getElementById("block")
let field=document.getElementById("playing-field")
let up=document.getElementById("up")
let down=document.getElementById("down")
let right=document.getElementById("right")
let left=document.getElementById("left")
let arrows=document.getElementById('arrows')

document.getElementById("up").onclick = function() {moveUp()};
up.onclick=function(){
    up = parseInt(ball.style.bottom) || 0
    up -= 15
   if(up>=0){
       ball.style.bottom = up + "px"
   }
   ball.style.top=ball.style.bottom
}
down.onclick=function(){
    down = parseInt(ball.style.top) || 0
    down += 15
   if(down <= field.offsetHeight - ball.offsetHeight - arrows.offsetHeight){
   ball.style.top = down + "px"
   }
   ball.style.bottom=ball.style.top
}

right.onclick = function() {
    right = parseInt(ball.style.left) || 0
        right+=15
    if(right <= (field.offsetWidth-ball.offsetWidth-10)) {
        ball.style.left = right + "px"
    }
    ball.style.right = ball.style.left
}

    left.onclick=function(){
    left=parseInt(ball.style.right) || 0
    left-=15
    if(left>=0){
    ball.style.right =left+"px"
    }
    ball.style.left=ball.style.right
}