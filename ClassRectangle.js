let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
class Rectangle {
    constructor(x, y, width, height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

    }
    getPerimeter() {
        return (width+height)*2;
    }
    getArea() {
        return width * height;
    }
    setWidth(value) {
        this.width=value;
    }
    setHeight(value) {
        this.height=value;
    }
    drawRectangle(canvas) {
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fillStyle = "blue";
        c.fill();
    }
}
// let width = Math.random() * 200;
// let height = Math.random() * 200;
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let rectangle = new Rectangle(x, y, 150, 100);
rectangle.drawRectangle();
// alert("Perimeter is: " + rectangle.getPerimeter());
// alert("Area is: " + rectangle.getArea());

