//Changing the text of title
const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Tahoma"];
current=0;



//changes font for the title
function changeFont()
{
    while(true)
    {
        newFont=Math.floor(Math.random()*5);
        console.log(newFont)
        if(newFont!=current)
        {
            current=newFont;
            break;
        }
        
    }

    document.getElementById("whitetitle").setAttribute("class", "hidetext");
    document.getElementById("blacktitle").setAttribute("class", "hidetext");


    setTimeout(() => {
        document.getElementById("whitetitle").style.fontFamily=fonts[current];
        document.getElementById("whitetitle").setAttribute("class", "showtext");
        document.getElementById("blacktitle").style.fontFamily=fonts[current];
        document.getElementById("blacktitle").setAttribute("class", "showtext");


    }, 1000)





}
//eventlistener for line
let isHolding = false;
let offset = 0;

window.addEventListener("DOMContentLoaded", (event) => {
    const slider = document.getElementById('line');
    if (slider) {
        slider.addEventListener('mousedown', startSliding);
        document.addEventListener('mouseup', stopSliding);
        document.addEventListener('mousemove', slide);
        }
    });

    function startSliding(e) {
        isHolding = true;
    }

    function stopSliding() {
        isHolding = false;
    }

    function slide(e) {
        if (!isHolding) return;

        const slider = document.getElementById('line');
        let x = e.clientX;

        // Ensure the slider stays within the bounds of the viewport
        if (x < 0) x = 0;
        if (x > window.innerWidth - slider.offsetWidth) x = window.innerWidth - slider.offsetWidth;

        slider.style.left = x + 'px';
        const rect = document.getElementById('line').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);    
        document.getElementById('blackmainpage').style.width=`${rect.right}px`
    }
        





setInterval(changeFont, 5000); // Change font every 5 seconds
