class Iron {
    constructor (x,y){
       var options = {
           'restitution':0.8,
           'friction': 3,
           'density': 30
                        
 
       } ;
       this.body = Bodies.rectangle(x,y,150,100,options);
       this.width= 200;
       this.height=100;
       World.add(world, this.body);
    };

    display(){

        push();
   
    strokeWeight(3);
    stroke("white")
    fill("purple")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();

    };




};