class Paper
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;
        this.image = loadImage("paper.png");
    
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position; 

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2); 
    }
};