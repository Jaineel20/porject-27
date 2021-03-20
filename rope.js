class Rope {
    constructor(bobObject1,bobObject2,bobObject3,bobObject4,bobObject5){
        var option ={
        bobObject1:bobObject1,
        bobObject2:bobObject2,
        bobObject3:bobObject3,
        bobObject4:bobObject4,
        bobObject5:bobObject5,
        stiffness: 0.04,
        length: 10
        }
        this.chain =Constraint.create(option);
        World.add(world,this.chain);

    }
  display(){
      var bobObject1=this.chain.bobObject1.position;
      var bobObject2=this.chain.bobObject2.position;
      var bobObject3=this.chain.bobObject3.position;
      var bobObject4=this.chain.bobObject4.position;
      var bobObject5=this.chain.bobObject5.position;
      strokeWeight(4);
      line(bobObject1.x,bobObject1.y,bobObject2.x,bobObject2.y,bobObject3.x,bobObject3.y,bobObject4.x,bobObject4.y,bobObject5.x,bobObject5.y);
  }
}