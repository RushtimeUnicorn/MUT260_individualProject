function Asteroid (pos, r) {

    if (pos){
        this.pos = pos.copy();
    }else{
        this.pos = createVector (random(width), random(height));
    }

    this.vel = p5.Vector.random2D();

    if (r){
        this.r = r * 0.5;
          }else{
              this.r = random(15,75);
          }

    this.update = function(){
        this.pos.add(this.vel);
    }

    this.render = function(){
        push();
        translate(this.pos.x, this.pos.y);
        ellipse (0, 0, this.r * 2);
        pop();
}

    this.breakup = function() {
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA;
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
}
