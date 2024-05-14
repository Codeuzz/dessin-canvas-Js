const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colorBtn = document.querySelectorAll("#couleurs button")
const slider = document.querySelector("#slider input")


let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!isDrawing) return;

    const x = event.offsetX;
    const y = event.offsetY;

    ctx.lineTo(x, y);
    
    ctx.stroke();
    ctx.beginPath();

    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);

    // ctx.lineWidth = 50;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


const changeLineColor = event => {
    ctx.strokeStyle = event.target.value;
    console.log(event.target.value)
    event.preventDefault()
}

colorBtn.forEach(btn => {
    btn.addEventListener('click', changeLineColor);
})

const changeLineSize = event => {
    ctx.lineWidth = event.target.value;
}

slider.addEventListener("change", changeLineSize)
