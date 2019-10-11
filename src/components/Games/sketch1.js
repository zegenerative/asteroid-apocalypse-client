import store from '../../store';

export default function (s) {
    function Bullet(x, y, angle) {
        this.x = x;
        this.y = y;
        this.eWidth = 5;
        this.hit = false;
        
        this.xspeed = 20;
        this.yspeed = 20;
        
        this.update = function() {
            this.y -= this.yspeed * s.cos(angle);
            this.x += this.xspeed * s.sin(angle);
        }

        this.delete = function() {
            this.hit = true;
        }
        
        this.show = function() {
            if(this.hit === false) {
                s.ellipse(this.x, this.y, this.eWidth);
            }
        }
    }

    function Asteroid(x, y, eWidth, eHeight, xspeed, yspeed) {
        this.x = x;
        this.y = y;
        this.eWidth = eWidth;
        this.eHeight = eHeight;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.hit = false;
        
        this.update = function() {
          this.y += this.yspeed;
          this.x += this.xspeed;
        }

        this.intersects = function(other) {
            let d = s.dist(this.x, this.y, other.x, other.y);
            if(d < this.eWidth + other.eWidth) {
              return true; 
            } else {
              return false;
            }
          }

        this.delete = function() {
        this.hit = true;
        }
        
        this.show = function() {
            if(this.hit === false) {
                s.noStroke();
                s.fill(255);
                s.ellipse(this.x, this.y, this.eWidth, this.eHeight);
            }        
        }
    }

    let angle = 0;
    let bullets = [];
    let asteroids = [];
    let spawnFreq = 3;
    let generate = true;
    let points = 0;

    function keyPressed() {
        if (s.key === 'a' && s.keyIsPressed === true) {
            angle -= 0.02;
        } else if (s.key === 'd' && s.keyIsPressed === true) {
            angle += 0.02;
        }
    }

    function spawn() {
        let timePassed = Math.floor(s.millis() / 100);
        let spawnTime = timePassed % spawnFreq;
        if(spawnTime === 0 && generate === true) {
          generate = false;
          console.log('asteroid incoming!');
          asteroids.push(new Asteroid(Math.floor(Math.random() * s.width), Math.floor(Math.random() * s.height) - s.height, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 2), Math.random() * 2));
        } else if (spawnTime !== 0) {
          generate = true;
        }
    }

    s.setup = function() {
        s.createCanvas(s.windowWidth, s.windowHeight);
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

    if(points > 50) {
        store.dispatch({
            type: 'GAME_ENDS',
            payload: true
        })
    }

    for(let i = 0; i < asteroids.length; i++) {
        asteroids[i].update();
        asteroids[i].show();
        for(let j = 0; j <bullets.length; j++) {
          if(asteroids[i].intersects(bullets[j])) {
            console.log('hit!');
            //asteroids[i].delete();
            asteroids.splice(i, 1);
            //bullets[j].delete();
            bullets.splice(j, 1);
            points += 1;
            store.dispatch({
                type: 'UPDATE_SCORE',
                payload: { 
                    score: points
                }
            })
          }  
        }
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
    spawn();
    }
}
