let navbar = document.getElementById("navbar");
window.onscroll = function(){
    if(window.scrollY>20){
        navbar.classList.add("scrolled");

    } else{
        navbar.classList.remove("scrolled");
    }
}
document.getElementById("git1Button").addEventListener("click",function(){
    window.open("https://github.com/RationalPrabal/CronoFit", "_blank");
})
document.getElementById("deploy1Button").addEventListener("click",function(){
    window.open("https://radiant-muffin-05b02a.netlify.app", "_blank");
})

document.getElementById("git2Button").addEventListener("click",function(){
    window.open("https://github.com/sauravsamui/Fitmeal-clone", "_blank");
})
document.getElementById("deploy2Button").addEventListener("click",function(){
    window.open("https://grand-longma-97f1d2.netlify.app/", "_blank");
})

document.getElementById("git3Button").addEventListener("click",function(){
    window.open("https://github.com/Rajdeep7079/figma", "_blank");
})
document.getElementById("deploy3Button").addEventListener("click",function(){
    window.open("https://cheery-flan-ef9b62.netlify.app/", "_blank");
})


// function cronoFit(){
//   window.open=("https://github.com/RationalPrabal/CronoFit", "_blank")
// }


document.getElementById("linkedin").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/rajdeep-kumar-0217241ba/");
})

document.getElementById("github").addEventListener("click",function(){
    window.open("https://github.com/Rajdeep7079/");
})



let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_length = nav_links.length;
nav_icon.addEventListener('click', () => {
  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${
        index / nav_length + 0.2
      }s`;
    }
  });
});
let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let header_height = header.getBoundingClientRect().height;

let sticky = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
let hero_observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${header_height}px`,
});
hero_observer.observe(hero);




const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', ()=>{
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.add('active');
        } else{
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.remove('active');
        }
    });
});



function myfunc(){
    
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "-110%";
        document.getElementById("check").checked = false;
    } else{
        document.getElementById("navMenu").style.right = "0%";
    }
}

function mycheck(){
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "0%";
    } else{
        document.getElementById("navMenu").style.right = "-110%";
    }
}

function resumeDownload(){
   
        window.open("https://drive.google.com/file/d/1xq_k1XF1psjgAUGUJOTQKLrA1cdVqJ4D/view?usp=share_link","_blank");
      }