for (let i = 0; i < 5; i++) {
    const red = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);

    color = `rgb(${red}, ${green}, ${blue})`;

    const div = document.createElement('div');
    div.className = 'square';

    div.style.backgroundColor = color;
    document.body.appendChild(div);
}
