class Block{
  constructor(x, y){
    var options={
      restitution:0.4,
      density:1,
      friction:1.2,
    }
    this.visibility = 255;
    this.body=Bodies.rectangle(x,y,40,40,options);
    this.x=x;
    this.y=y;
    this.width=40;
    this.height=40;
    this.image = loadImage("block.png");
    World.add(world,this.body)
  }
  display(){
    if(this.body.speed <4){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image( this.image , 0 , 0 , this.width , this.height)
    pop();
    }
     else{
      World.remove(world, this.body);
      push();
          this.visiblity = this.visiblity - 10;
          tint(255,this.visiblity);
          pop();
      }
    }
  
}
    
  
    
  
