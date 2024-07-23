//Changing the text of title
const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Tahoma"];
current=0;
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

    document.getElementById("title").setAttribute("class", "hidetext");

    setTimeout(() => {
        document.getElementById("title").style.fontFamily=fonts[current];
        document.getElementById("title").setAttribute("class", "showtext");
    }, 1000)





}
setInterval(changeFont, 5000); // Change font every 5 seconds
