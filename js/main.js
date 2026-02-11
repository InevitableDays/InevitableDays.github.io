import { initMinesweeper } from "./minesweeper.js";
initMinesweeper();
       
//player
  const Btn = document.getElementById("Btn");  
  const Music = document.getElementById("Music");
  const frameElement = document.getElementById("neonFrame"); //Nframe p 1

let running = false;

function startClubLights() {
  frameElement.classList.add("active");
}

function stopClubLights() {
  frameElement.classList.remove("active");  //nf end p 1
}

  Btn.addEventListener("click", () => {
    if (Music.paused) {
      Music.play();
      Btn.style.opacity = "1";
      if (!running) {       //Nframe btn js 
      startClubLights();
      running = true;
    }                       //Nframe btn js 
    } else {
      Music.pause();
      Btn.style.opacity = "0.65";
      stopClubLights();      //Nframe btn js 
    running = false;          //Nframe btn js 
    }
});

Music.addEventListener("ended", () => {  // stop Nframe when ended
  stopClubLights();
  running = false;
});

//go up
    window.addEventListener("scroll", () => {
    document.getElementById("goTop").style.display =
      window.scrollY > 900 ? "block" : "none";    //go up button
}); 

  const homeTitle = document.getElementById("homeTitle");  //home relander

homeTitle.addEventListener("click", () => {
    location.reload();  // force reload when you add true
});

//zoomer
document.querySelectorAll('.section img').forEach(img => {
  img.addEventListener('click', (e) => {
    if (e.button === 0) { // left mouse button only
      img.classList.toggle('zoomed');
    }
  });

  // Also handle case when mouse leaves the image while pressed
  img.addEventListener('mouseleave', () => {
    img.classList.remove('zoomed');
  });

  // loader js test

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
       
});   // Valid 

