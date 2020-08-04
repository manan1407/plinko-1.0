class Division {
    constructor(x,y,width,hieght){
        this.body = Bodies.rectangle(x,y,width,hieght,{isStatic:true});
        this.width = width;
        this.hieght = hieght;
         
        World .add(world,this.body);
        
        
    }

    display(){
        var position = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("green");
        rect(position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
