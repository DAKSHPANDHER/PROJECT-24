class Stone {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':12
      };
      this.body = Bodies.rectangle(x, y,200,200, options);
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
     
  
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('red')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };