"use strict";

//use them to iterate to every single article
let secs = document.querySelectorAll("section");

//those are the elements whose classes i want to toggle:
let articles = document.querySelectorAll("article");
let hls = document.querySelectorAll(".hl-wrappers");
let smalls = document.querySelectorAll(".small-wrappers");
let dividers = document.querySelectorAll(".dividers");

//onscroll check if the elements are within the viewport:
window.addEventListener("scroll", () => {
  for(let i = 0 ; i < secs.length ; i++)
    {

      //everytime we scroll we want a new Bounding-Object to determine how far the items are within the viewport:
      let topValue = secs[i].getBoundingClientRect().top;

      //how far you want them in the viewport before fading the elements in depends on this single int-value:
      if(topValue <= 350)
        {
          articles[i].classList.add("invp");
          hls[i].classList.add("invp");
          smalls[i].classList.add("invp");
          dividers[i].classList.add("invp");
        }
      //OPTIONAL: only if you want the items to disappear when the user scrolls back. You can omit this else-block, so the elements will fade-in one time and then stay:
      else
        {
          articles[i].classList.remove("invp");
          hls[i].classList.remove("invp");
          smalls[i].classList.remove("invp");
          dividers[i].classList.remove("invp");
        }
    }
});
