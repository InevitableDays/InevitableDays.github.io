import { initMinesweeper } from "./minesweeper.js";
initMinesweeper();
       
//player
  const Btn = document.getElementById("Btn");  
  const Music = document.getElementById("Music");
  const frameElement = document.getElementById("neonFrame"); //Nframe Start

let running = false;

function startClubLights() {
  frameElement.classList.add("active");
}

function stopClubLights() {
  frameElement.classList.remove("active");
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

});

