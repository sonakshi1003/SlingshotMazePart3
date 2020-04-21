class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    if(gameState === "Win" || gameState === "Lose"){
      this.body.isStatic = true;
    }
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if(pos.y < 610){
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rotate(angle);
      strokeWeight(2);
      fill(255, 0, 0);
      rect(0,0,this.width,this.height);
      pop();
    }
    else{
        World.remove(world, this.body);
        score = score + 10;
        pos.y = -1000;
        this.body.isStatic = true;
        push();
        this.Visiblity = this.Visiblity - 0.1;
        fill(this.Visiblity);
        pop();
    }
}
}