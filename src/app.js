/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // console.log("Hello Rigo from the console!");
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["focus", "racoon", "heroes"];

  let list = "";

  pronouns.map(pronoun => {
    adjectives.map(adjective => {
      nouns.map(noun => {
        if (noun.endsWith("us")) {
          list += `<li> ${pronoun}${adjective}${noun.slice(0, -2)}.us</li>`;
          console.log(pronoun + adjective + noun.slice(0, -2) + ".us");

        } else if (noun.endsWith("es")) {
          list += `<li> ${pronoun}${adjective}${noun.slice(0, -2)}.es</li>`;
          console.log(pronoun + adjective + noun.slice(0, -2) + ".es");

        } else {
          list += `<li> ${pronoun}${adjective}${noun}.com</li>`;
          console.log(pronoun + adjective + noun + ".com");
        }
      });
    });
  });

  document.querySelector("#exercise").innerHTML = list;
};
