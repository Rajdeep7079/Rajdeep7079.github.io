const target = document.getElementById("target");
let array = ["A technical Support Engineer"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.classList.add("letter");
  letter.style.opacity = '0';
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
      
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
      
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
}
loop();


//////////////////////////////////

figma=()=>{
  window.location.href="https://cheery-flan-ef9b62.netlify.app"
}

crono=()=>{
  window.location.href="https://radiant-muffin-05b02a.netlify.app"
}

myglam=()=>{
  window.location.href=""
}
fitmeals=()=>{
  window.location.href=""
}

// github

function crogit(){
  window.open("https://github.com/RationalPrabal/CronoFit")
}
function fitgit(){
  window.open("https://github.com/sauravsamui/Fitmeal-clone")
}
function myglamgit(){
  window.open("https://github.com/Rajdeep7079/energized-fruit-4440")
}
function figmagit(){
  window.open("https://github.com/Rajdeep7079/figma")
}

function resume(){
  window.open("https://drive.google.com/file/d/1xq_k1XF1psjgAUGUJOTQKLrA1cdVqJ4D/view?usp=share_link")
}