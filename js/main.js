import { loadLanguage } from "./lang.js";
import { initMinesweeper } from "./minesweeper.js";
// Load default language
loadLanguage('en');
initMinesweeper();
       
  // Disable right-click everywhere EXCEPT Minesweeper grid
  document.addEventListener("contextmenu", function (e) {
    const minesweeper = document.getElementById("minesweeper");

    // allow right click inside minesweeper (for flags)
    if (minesweeper && minesweeper.contains(e.target)) return;

    e.preventDefault();
});

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

  
// block right click everywhere else
// Block common dev tools shortcuts silently
document.addEventListener('keydown', function(e) {

  const key = e.key.toLowerCase(); // <-- FIX: define key

  // F12
  if (e.key === 'F12') e.preventDefault();

  // Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') e.preventDefault();

  // Ctrl+Shift+J or Cmd+Opt+J (console)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'j') e.preventDefault();

  // Ctrl+U or Cmd+U (View Source)
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') e.preventDefault();
  
    // Ctrl+Shift combos (Windows/Linux)
  if (e.ctrlKey && e.shiftKey && (
      key === 'i' ||   // DevTools
      key === 'j' ||   // Console
      key === 'c'      // Inspect element
  )) {
    e.preventDefault();
    return;
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
