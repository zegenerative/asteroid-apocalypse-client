export default function (s) {
    function Bullet(x, y, angle) {
        this.x = x;
        this.y = y;
        
        this.xspeed = 20;
        this.yspeed = 20;
        
        this.update = function() {
            this.y -= this.yspeed * s.cos(angle);
            this.x += this.xspeed * s.sin(angle);
        }
        
        this.show = function() {
            s.ellipse(this.x, this.y, 5);
        }
    }

    function Asteroid(x, y, eWidth, eHeight, xspeed, yspeed) {
        this.x = x;
        this.y = y;
        this.eWidth = eWidth;
        this.eHeight = eHeight;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        
        this.update = function() {
          this.y -= this.yspeed;
          this.x += this.xspeed;
        }
        
        this.show = function() {
          s.ellipse(this.x, this.y, this.eWidth, this.eHeight);
        }
      }

    let angle = 0;
    var bullets = [];
    let asteroids = []

    function keyPressed() {
        if (s.key === 'a' && s.keyIsPressed === true) {
            angle -= 0.05;
        } else if (s.key === 'd' && s.keyIsPressed === true) {
            angle += 0.05;
        }
    }

    s.setup = function() {
    s.createCanvas(s.windowWidth, s.windowHeight);
    // let particle = new Particle(s.width/2, s.height - 100);
    for (let i = 0; i < 7; i++) {
        asteroids.push(new Asteroid(Math.floor(Math.random() * s.width), Math.floor(Math.random() * s.height), Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 10), Math.random() * 10));
     }
    }

    s.mousePressed = function() {
        let x = (s.sin(angle) * s.TWO_PI);
        let y = (s.cos(angle) * s.TWO_PI);
        bullets.push(new Bullet(s.width/2 + x * 10, s.height - (y*10), angle));
    }

    s.draw = function(){
    s.background(0);
    
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].update();
        bullets[i].show();
    }

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].update();
        asteroids[i].show();
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
