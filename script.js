var arr = [
    {dp:"./images/sarthak_d.jpg",story: "./images/sarthak_s.jpg"},
    {dp:"./images/harsh_d.jpg",story: "./images/harsh_s.jpg"},
    {dp:"./images/sheryians_d.jpg",story: "./images/sheryians_s.jpg"},
    {dp:"./images/sarthak_d.jpg",story: "./images/sarthak_s.jpg"},
    {dp:"./images/harsh_d.jpg",story: "./images/harsh_s.jpg"},
    {dp:"./images/sheryians_d.jpg",story: "./images/sheryians_s.jpg"}
]

var story = document.querySelector("#story")
var clutter = ""

arr.forEach(function(elem, idx){

    clutter += `<div class="storyInsta">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
    
})

story.innerHTML = clutter


story.addEventListener("click", function(dets){
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullScreen").style.display = "none"
    },3000)
})


var con = document.querySelector("#sarthak")
var like = document.querySelector("#dblLike")
var con2 = document.querySelector("#harsh")
var like2 = document.querySelector("#dblLike2")

con.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        like.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})

con2.addEventListener("dblclick", function(){
    like2.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        like2.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})