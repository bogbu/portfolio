const gnb = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const headerheight = header.offsetHeight;

for(let i = 0; i <gnb.length ; i++)
{
    gnb[i].addEventListener('click',(e)=>{
        e.preventDefault();
        gnbselect = document.querySelector(".contbox" + ( i + 1 ));
        gnbselectheight = gnbselect.offsetTop;

        window.scrollTo({

            top:gnbselectheight ,
            left:0,
            behavior: "smooth"
        });

    });
}

window.addEventListener("scroll",()=>{
    let scTop = window.scrollY;
    if(scTop > 100)
    {
        header.classList.add("on");
    }
    else 
    {
        header.classList.remove("on");
    }
});