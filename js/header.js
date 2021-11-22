const gnb = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const headerheight = header.offsetHeight;
const more = document.querySelector(".more");
const moreMenu = document.querySelector(".moreMenu");

for(let i = 0; i <gnb.length ; i++)
{
    gnb[i].addEventListener('click',(e)=>{
        e.preventDefault();
        gnbselect = document.querySelector(".contbox" + ( i + 1 ));
        gnbselectheight = gnbselect.offsetTop;

        window.scrollTo({

            top:gnbselectheight-headerheight ,
            left:0,
            behavior: "smooth"
        });

    });
}

window.addEventListener("scroll",()=>{
    let scTop = window.scrollY;
    if(scTop > 500)
    {
        header.classList.add("on");
    }
    else 
    {
        header.classList.remove("on");
    }
});

more.addEventListener("click",(e)=>{
    e.preventDefault();
    if(more.classList.contains("click"))
    {
        more.classList.remove("click");
        moreMenu.classList.remove("click");
    }
    else
    {
        more.classList.add("click");
        moreMenu.classList.add("click");
    }
});