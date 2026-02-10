import { initMinesweeper } from "./minesweeper.js";
initMinesweeper();
       
//player
  const Btn = document.getElementById("Btn");  
  const Music = document.getElementById("Music");
  Btn.addEventListener("click", () => {
    if (Music.paused) {
      Music.play();
      Btn.style.opacity = "1";
    } else {
      Music.pause();
      Btn.style.opacity = "0.65";
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
  // Zoom on press
  img.addEventListener('mousedown', () => {
    img.classList.add('zoomed');
  });


  // Also handle case when mouse leaves the image while pressed
  img.addEventListener('mouseleave', () => {
    img.classList.remove('zoomed');
  });

  // Optional: handle touch devices
  img.addEventListener('touchstart', () => {
    img.classList.add('zoomed');
  });

  img.addEventListener('touchend', () => {
    img.classList.remove('zoomed');
  });
});

