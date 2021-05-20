class KY029{
    constructor(x, y, canvas_context, gnd, r, g){
        this.x = x;
        this.y = y;
        this.canvas_context = canvas_context;
        this.gnd = gnd;
        this.r = r;
        this.g = g;
        this.draw(this.canvas_context, this.x, this.y);
    }
    draw(canvas_context, x, y){
        var color = this.set_state();
        console.log(color);

        canvas_context.fillStyle = "#505050";
        canvas_context.fillRect(x + 20, y + 10, 150, 75);
        canvas_context.fillStyle = "#909090";
        canvas_context.fillRect(x + 0, y + 20, 30, 10);
        canvas_context.fillRect(x+0, y+40, 30, 10);
        canvas_context.fillRect(x+0, y+60, 30, 10);
        canvas_context.fillStyle = color;
        canvas_context.fillRect(x+150, y+20, 5, 55);
        canvas_context.fillRect(x+150, y+30, 40, 35);
    }
    set_state(){
        var res = 0;

        res = this.gnd ? "#" : "#000000"; 
        if(res == "#"){
            res += this.r ? "FF" : "00";
            res += this.g ? "FF" : "00";
            res += '00';
        }

        return res;
    }
}

/*class KY029{
    constructor(ctx, GND=false,RED=0,GREEN=0,X=0,Y=0){
        this.draw(ctx,this.setState(ctx),X,Y);
    }
    draw(ctx,color,X=0,Y=0){
        this.color=color;
        this.X=X;this.Y=Y;
        ctx.fillStyle = "#505050";
        ctx.fillRect(this.X+20, this.Y+10, 150, 75);
        ctx.fillStyle = "#909090";
        ctx.fillRect(this.X+0, this.Y+20, 30, 10);
        ctx.fillRect(this.X+0, this.Y+40, 30, 10);
        ctx.fillRect(this.X+0, this.Y+60, 30, 10);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.X+150, this.Y+20, 5, 55);
        ctx.fillRect(this.X+150, this.Y+30, 40, 35);
    }
    setState(ctx, GND=false,RED=0,GREEN=0,X=0,Y=0){
        this.GND=GND;this.RED=RED;this.GREEN=GREEN;this.X=X;this.Y=Y;this.ctx=ctx;
        this.A=(this.RED==1)?"FF":"00";
        this.B=(this.GREEN==1)?"FF":"00";
        this.res=(this.GND==true)?"#"+this.A+this.B+"00":"#000000";
        //alert(this.RED);
        this.draw(this.ctx,this.res,this.X=0,this.Y=0)
        return this.res;
    }
    //method3(){}
}*/