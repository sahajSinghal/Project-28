class DustbinHorizontal
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,200,20,options);
        this.width = 200;
        this.height = 20;
        this.image = loadImage("dustbingreen.png");

        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y-80,260,190);
    }
};