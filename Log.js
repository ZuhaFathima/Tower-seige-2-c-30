class Log extends BaseClass2{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("base.png");
    Matter.Body.setAngle(this.body, angle);
  }
}