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
  const extensions = ["com", "net", "org", "es", "ve"];

  document
    .getElementById("generateButton")
    .addEventListener("click", generateDomains);

  function generateDomains() {
    let pronounExtension = pronoun.length;

    let extensionsLoop = extensions.length;
    let listOfDomains = [];

    for (let i = 0; i < 15; i++) {
      const completeDomain =
        pronoun[i % pronounExtension] +
        names[Math.floor(Math.random() * names.length)] +
        "." +
        extensions[i % extensionsLoop];
      listOfDomains.push(completeDomain);
    }

    displayResults(listOfDomains);
  }

  function displayResults(domains) {
    let resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    domains.forEach(domain => {
      let domainElement = document.createElement("p");
      domainElement.textContent = domain;
      resultsContainer.appendChild(domainElement);
    });
  }
};
