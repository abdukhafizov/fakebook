    const BASE_URL = "http://localhost:8080"
    let about_all_boxes = document.querySelector(".about_all_boxes")
    let ten = document.querySelector(".ten")
    let show_all = document.querySelector("#other_ten")

    function reload(arr, place) {
        place.innerHTML = ""


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

            place.append(box)
            box.append(h2, first_p, second_p, third_p, a)
            a.append(more_btn)

 

        }
    }
    ten.onclick = () => {
        fetch(BASE_URL + "/users")
            .then(res => res.json())
            .then(res => {
               const arr = res.slice(0, 15);
                reload(arr, about_all_boxes);
            });
    };

    show_all.onclick = () => {
        fetch(BASE_URL + "/users")
        .then(res => res.json())
        .then(res => {
            reload(res, about_all_boxes);
        });
    };
    

function fetchData() {
    fetch(BASE_URL + "/users")
        .then(res => res.json())
        .then(res => {

            reload(res, about_all_boxes);
        })



}



fetchData()

