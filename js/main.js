import { initMinesweeper } from "./minesweeper.js";
initMinesweeper();
       

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

    window.addEventListener("scroll", () => {
    document.getElementById("goTop").style.display =
      window.scrollY > 900 ? "block" : "none";    //go up button
}); 

  const homeTitle = document.getElementById("homeTitle");  //home relander

// Make clicking the header reland (reload) the current page
homeTitle.addEventListener("click", () => {
    location.reload();  // force reload when you add true
});
