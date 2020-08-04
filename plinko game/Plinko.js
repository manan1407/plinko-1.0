class Plinko {
    constructor (x,y){
       this.body = Bodies.circle(x,y,10,{isStatic:true,restitution:0.6});
       this.radius = 10;
       World.add(world,this.body);
    }

    display(){
        var pos = ths.body.position;
        push ();
        circle(pos.x,pos.y,this.radius);
        pop ();
    }
}