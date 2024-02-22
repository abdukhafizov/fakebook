    const BASE_URL = "http://localhost:8080"
    let about_all_boxes = document.querySelector(".about_all_boxes")
    let grid_less_twenyfive = document.querySelector(".grid-less_twenyfive")
    let grid_other = document.querySelector(".grid-other")
    let show_all = document.querySelector(".show-all")
    let first = document.querySelector("#first")
    let second = document.querySelector("#second")
    let third = document.querySelector("#third")
    let btns = document.querySelectorAll("button")

    function reload(arr, place, place2, place3) {
        place.innerHTML = ""
        place2.innerHTML = ""
        place3.innerHTML = ""

        for (let item of arr) {
            let box = document.createElement("div")
            let h2 = document.createElement("h2")
            let first_p = document.createElement("p")
            let second_p = document.createElement("p")
            let third_p = document.createElement("p")
            let more_btn = document.createElement("button")
            let a = document.createElement("a")

            box.classList.add("box")
            h2.classList.add("name")
            first_p.classList.add("about_title")
            second_p.classList.add("about_title")
            third_p.classList.add("about_title")
            more_btn.classList.add("more")

            first_p.id = "company"
            second_p.id = "Website"
            third_p.id = "Phone"


            h2.textContent = item.name;
            first_p.textContent = item.company.name;
            second_p.textContent = item.website;
            third_p.textContent = item.phone;
            more_btn.textContent = "Подробнее"

            a.href = './more.html?id=' + item.id


            box.append(h2, first_p, second_p, third_p, a)
            a.append(more_btn)

            if (item.age < 25) {
                place.append(box);
            } else if (item.age < 35) {
                place2.append(box);
            } else {
                place3.append(box);
            }

        }
    }
    first.onclick = () => {
        fetch(BASE_URL + "/users")
            .then(res => res.json())
            .then(res => {
               const  place = res.slice(0, 3);
                reload(res, about_all_boxes, grid_less_twenyfive, grid_other);
            });
    };


function fetchData() {
    fetch(BASE_URL + "/users")
        .then(res => res.json())
        .then(res => {

            reload(res, about_all_boxes, grid_less_twenyfive, grid_other);
        })



}



fetchData()

