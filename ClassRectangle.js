function Rectangle(width, height) {
    this.width = width;
    this.height=height;

    this.getPerimeter = function () {
        return (width + height)/2;
    };
    this.getArea = function () {
        return width * height;
    };
    this.setWidth = function (value) {
        this.width = value;
    };
    this.setHeight = function (value) {
        this.height = value;
    }
}

let rectangle = new Rectangle(3,5);
let perimeter = rectangle.getPerimeter();
let area = rectangle.getArea();
alert("perimeter: " + perimeter + "; area: " + area);

rectangle.setWidth(2);
rectangle.setHeight(3);
perimeter = rectangle.getPerimeter();
area = rectangle.getArea();
alert("perimeter: " + perimeter + "; area: " + area);
