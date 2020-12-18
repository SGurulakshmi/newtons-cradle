class Roof
{
    constructor(x,y,width,height,options)
    {
        options=
         {
            isStactic:true,
         }
        this.body = Bodies.rectangle()
        this.width = width
        this.height = height
    }
    display()
    {
        push();
        rectMode(CENTER);
        fill("grey");
        rect(this.body.position.x,this.body.position.y,this.height,this.weight)
        pop();
    }
}