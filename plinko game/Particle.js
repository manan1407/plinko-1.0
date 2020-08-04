class Particle {
    constructor (x,y){
       this.body = Bodies.circle(x,y,10,{isStatic:true,restitution:0.6});
       this.radius = 10;
       this.color = color(random(0,225), random(0,225), random(0,225));
       World.add(world,this.body);
    }

    display(){
        var pos = ths.body.position;
        push ();
        fill (this.color);
        circle(pos.x,pos.y,this.radius);
        pop ();
    }
}