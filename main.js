//Changing the text of title
const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Tahoma"];
current=0;
let slider=document.getElementById("line")
document.getElementById("line").addEventListener("click", slide);

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
function slide()
{
    isHolding=true
    while(isHolding)
    {
        console.log("hi")

    }
}

function notHolding()
{
    isHolding=false
}





setInterval(changeFont, 5000); // Change font every 5 seconds
