setTimeout(() => {
    const data =
        import ("../date/data.json", { assert: { type: "json" } })
        .then((result) => {
            return result.default
        })
        .then((array) => {
            array.map((item) => {
                createElement(item);
            })
        })
}, 500)

// fetch("../date/data.json")
//     .then((result) => {
//         const myData = result.json();
//         return myData;
//     })
//     .then((myData) => {
//         myData.forEach(element => {
//             createElement(element);
//         });
//     })

function createElement(element) {
    const categories = document.querySelectorAll(".details li");
    categories.forEach((ele) => {
        if (ele.type === element.category) {
            ele.children[0].src = element.icon;
            ele.children[1].innerHTML = element.category;
            ele.children[2].children[0].innerHTML = element.score;
            ele.style.background = element.background;
        }
    })
}