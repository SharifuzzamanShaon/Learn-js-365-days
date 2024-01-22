///factory fun
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    };
}

const circle = createCircle(1);
circle.draw();
// constructor fun
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log("draw");
        }
}

const circle2 =new Circle(2);
circle2.draw();