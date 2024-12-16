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
  let noun = ["jogger", "racoon"];

  let list = "";

  pronoun.map(a => {
    adj.map(b => {
      noun.map(c => {
        list += `
        <li> ${a}${b}${c}.com</li>
        `;
        // console.log(a + b + c + ".com");
      });
    });
  });

  document.querySelector("#exercise").innerHTML = list;
};
