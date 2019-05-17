var sh = document.getElementById("nini")



window.onscroll=function(){
    let top = document.documentElement.scrollTop ||documet.body.scrollTop || window.pageYOffset;
    if(top>=350){
        sh.className="bangbang"
    }else{
        sh.className="ooh"
    }
}