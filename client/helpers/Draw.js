const canvas = document.getElementById("wrapper");
const context = canvas.getContext("2d");
context.setTransform(1, 0, 0, 1, 0, 0);
const width = document.documentElement.clientWidth;
const height = document.body.clientHeight;

canvas.width = width;
canvas.height = height;

const clearCanvas = (context, canvas) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
    context.setTransform(1, 0, 0, 1, 0, 0);
};

const drawCircle = (x, y, radius, color, strokeWidth) => {
    context.strokeStyle=color;
    context.strokeWidth = `${strokeWidth}px`;
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.stroke();
};