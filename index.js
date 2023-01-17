let red = Math.ceil(Math.random() * 255);
let green = Math.ceil(Math.random() * 255);
let blue = Math.ceil(Math.random() * 255);

for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    const color = `rgb(${red}, ${green}, ${blue})`;
    div.className = "square";

    console.log(color);
    div.style.backgroundColor = color;
    document.body.append(div);
}

// for (let j = 0; j < 5; j++) {
//     div.style.backgroundColor = color;
// }

function Palette(name) {
    this.name = name;
}

const P1 = new Palette("Cool colors");

console.log(P1.name);
