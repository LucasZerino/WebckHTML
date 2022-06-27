var nav = document.querySelector('nav');
  
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('nav-active');
  } else {
    nav.classList.remove('nav-active');
  }
});




window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('activecont');
    }else{
        reveals[i].classList.remove('activecont');
    }
}
}