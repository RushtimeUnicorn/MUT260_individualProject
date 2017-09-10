function Ship() {
    this.pos = createVector (width/2, height/2);
    this.r=10;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector (0,0);
    this.isBoosting = false;
    this.lives = 3;

    this.boosting=function(b){
        this.isBoosting = b;
    }

    this.update = function(){
        if (this.isBoosting){
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }

    this.boost=function(){
        var force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1);
        this.vel.add(force);
    }

    this.render = function(){
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
        pop();
    }

    this.hits = function(asteroid){
             var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if (d<this.r + asteroid.r){

            this.lives-1;
            console.log;

        }
    }
    if(this.lives < 0) {
      push();
      textSize(32);
      fill(255);
      text("GAME OVER", (width / 2) - 100, height / 2);
    }




    this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
      }

    this.setRotation= function(a){
        this.rotation= a;
    }

    this.turn = function() {
        this.heading+= this.rotation;
    }
}
