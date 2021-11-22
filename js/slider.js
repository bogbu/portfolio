const content = document.querySelector(".list");
const left = document.querySelector(".left");
const right = document.querySelector(".right");


left.addEventListener("click",(e)=>{
    e.preventDefault();
    content.style.marginLeft= "0%";
    console.log("마지막");
});
right.addEventListener("click",(e)=>{
    e.preventDefault();
    content.style.marginLeft="-100%";
});


