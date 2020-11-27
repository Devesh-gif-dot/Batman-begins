class Drops{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;

        this.body = Bodies.circle(x,this.y,this.r/2,{friction:0.5});
        World.add(world,this.body);
    }

    display(){
        fill('blue');
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}