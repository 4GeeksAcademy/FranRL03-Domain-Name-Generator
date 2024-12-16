/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["focus", "racoon", "heroes"];

  let list = "";

  pronoun.map(a => {
    adj.map(b => {
      noun.map(c => {
        if (c.endsWith("us")) {
          list += `
          <li> ${a}${b}${c.slice(0, -2)}.us</li>
          `;
          console.log(a + b + c.slice(0, -2) + ".us");
        } else if (c.endsWith("es")) {
          list += `
          <li> ${a}${b}${c.slice(0, -2)}.es</li>
          `;
          console.log(a + b + c.slice(0, -2) + ".es");
        } else {
          list += `
          <li> ${a}${b}${c}.com</li>
          `;
          console.log(a + b + c + ".com");
        }
        // list += `
        // <li> ${a}${b}${c}.com</li>
        // `;
      });
    });
  });

  document.querySelector("#exercise").innerHTML = list;
};
