/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let names = [
    "tech",
    "web",
    "code",
    "hub",
    "cloud",
    "byte",
    "dev",
    "ninja",
    "connect",
    "smart"
  ];
  let noun = ["sunshine", "mountain", "ocean", "friendship", "book"];

  document
    .getElementById("generateButton")
    .addEventListener("click", generateDomain);

  function generateDomain() {
    const randomWord1 = pronoun[Math.floor(Math.random() * pronoun.length)];
    const randomWord2 = names[Math.floor(Math.random() * names.length)];
    const randomWord3 = noun[Math.floor(Math.random() * noun.length)];

    const randomExtension = getRandomExtension();
    const domain = `${randomWord1}${randomWord2}${randomWord3}.${randomExtension}`;
    document.getElementById(
      "domainResult"
    ).innerText = `Your domain is: ${domain}`;
  }

  function getRandomExtension() {
    const extensions = ["com", "net", "org", "es", "ve"];
    return extensions[Math.floor(Math.random() * extensions.length)];
  }
};
