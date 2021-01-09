class Box extends BaseClass {
  constructor(x, y,width,height){
    
    super(x,y,width,height)
    this.image = loadImage("base.png");
    this.Visiblity = 200;
  }

 display(){
  
   if(this.body.speed < 20){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(200,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y,this.body.width,this.body.height);
     pop();
   }
   
 }



};