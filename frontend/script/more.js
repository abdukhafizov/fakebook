const id = location.search.split("=").at(-1)
const url = 'http://localhost:8080/users/'
let h1 = document.querySelector("h1")
let about_us = document.querySelector("#about_us")
let h3 = document.querySelector("h3")




    fetch(url + id)
    .then(res => res.json())
    .then(res => {
        h1.innerHTML = res.name
        let preElement = document.createElement("pre");
        let jsonString = JSON.stringify(res, null, 2);
        preElement.textContent = jsonString;
        h3.appendChild(preElement);
    })