export default function (s) {
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        
        this.yspeed= 5;
        
        this.update = function() {
        this.y -= this.yspeed;
        }
        
        this.show = function() {
        s.ellipse(this.x, this.y, 5);
        }
    }

    let angle = 0;
    var particles = [];

    function keyPressed() {
    if (s.key === 'a' && s.keyIsPressed === true) {
        angle -= 0.05;
    } else if (s.key === 'd' && s.keyIsPressed === true) {
        angle += 0.05;
    }
    }

    s.setup = function() {
    s.createCanvas(s.windowWidth, s.windowHeight);
    let particle = new Particle(s.width/2, s.height - 100);
    }

    function mousePressed() {
    let x = (s.sin(angle) * s.TWO_PI);
    let y = (s.cos(angle) * s.TWO_PI);
    particles.push(new Particle(s.width/2 + x * 10, s.height - (y*10)));
    }

    s.draw = function(){
    s.ackground(0);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
    
    s.translate(s.width/2, s.height);
    
    s.fill(255);
    s.stroke(255);
    s.rotate(angle);
    s.strokeWeight(2);
    s.ellipse(0, 0, 100);
    s.strokeWeight(2);
    s.ellipse(0, -50, 20);
    s.strokeWeight(10);
    s.line(0, -50, 0, -100);
    s.strokeWeight(2);
    s.ellipse(0, -100, 5);

    keyPressed();
    }
}
