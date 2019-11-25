

window.addEventListener('mousemove', function (event) {
    console.log("mouse has been moved");

    mouse.x = event.x;
    mouse.y = event.y;
});


const MIN_RADIUS = 40;
const MAX_RADIUS = 70;

var COLORS = ["red", "orange", "cyan", "pink"];

var mouse =
{
    x: undefined,
    y: undefined
};

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");



var BubblePhysics =
{
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
};



class Circle {
    constructor(x, y, dx, dy, radius, BubblePhysics) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        //console.log("colosds ", Math.random() * 3 + 1);
        this.dx = dx;
        this.dy = dy;
        //console.log(this.dx);

    }


    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // ctx.strokeStyle = this.color;
        //console.log(this.color);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();


        //this.update();
    }


    update() {

        // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
            this.dx = -this.dx;

        // console.log("this.dy ", this.dy);
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
            this.dy = -this.dy;
        //console.log("this.dy ", this.dy);

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        //this.y = this.y + this.dy;
        // console.log("this.y ", this.y);

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < MAX_RADIUS) this.radius = this.radius + 1;
        }

        else if (this.radius > 5) this.radius = this.radius - 1;


        // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.draw();

    }

    animation() {
        requestAnimationFrame(this.animation.bind(this));
        // ctx.fillStyle = "white";
        //ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        //requestAnimationFrame(this.animation)

        this.update()

    }



}



// function animation() {

//     var circle = new Circle(50, 100, 30, "red", BubblePhysics);
//     this.circle.update();

// }



var circle = [];
for (var i = 0; i < 500; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    // var child = new Circle(x, y, 30, "red", BubblePhysics);
    circle.push(new Circle(x, y, dx, dy, MIN_RADIUS, BubblePhysics));


}

// console.log(circle);
// circle[0].animation();
// circle[1].animation();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < circle.length; i++) {

        circle[i].update();

    }

}




animate();



