var count=2;
document.querySelector(".share").addEventListener("click",function(){
    if(innerWidth>600){
        var elem=document.querySelector(".banner");
    if(count%2==0){
        this.style.backgroundColor="hsl(217, 19%, 35%)";
        elem.style.display="flex";
    }
    else{
        this.style.backgroundColor="hsl(210, 46%, 95%)";
        elem.style.display="none";
    }
    count++;
    }
    else{
        document.querySelector(".bottom").style.display="none";
        document.querySelector(".active").style.display="flex";
        document.querySelector("main").style.height="600px";
    }
});
document.querySelectorAll(".share")[1].addEventListener("click",function(){
    document.querySelector(".bottom").style.display="flex";
        document.querySelector(".active").style.display="none";
        document.querySelector("main").style.height="max-content";
});