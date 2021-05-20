class SpeedoMeter{
    constructor(position, minimum, maximum, background, color, arrow_color){
        this.position = position;
        this.minimum = minimum;
        this.maximum = maximum;
        this.background = background;
        this.color = color;
        this.arrow_color = arrow_color;
        this.draw(0);
    }
    draw(num){
        var canva = $(this.position).get(0);
        canva.width = window.innerWidth;
        canva.height = window.innerHeight;
        var context = canva.getContext("2d");
        var path1 = new Path2D('M487.5,650h-325a163.7,163.7,0,0,1-32.75-3.3,161.613,161.613,0,0,1-58.106-24.451A162.973,162.973,0,0,1,12.77,550.753,161.677,161.677,0,0,1,3.3,520.25,163.7,163.7,0,0,1,0,487.5V325a327.4,327.4,0,0,1,6.6-65.5A323.216,323.216,0,0,1,55.5,143.289,325.95,325.95,0,0,1,198.5,25.54,323.364,323.364,0,0,1,259.5,6.6a328.168,328.168,0,0,1,131,0A323.217,323.217,0,0,1,506.71,55.5,325.949,325.949,0,0,1,624.46,198.5,323.359,323.359,0,0,1,643.4,259.5,327.4,327.4,0,0,1,650,325V487.5a163.7,163.7,0,0,1-3.3,32.749,161.61,161.61,0,0,1-24.451,58.106,162.973,162.973,0,0,1-71.495,58.874,161.677,161.677,0,0,1-30.5,9.469A163.7,163.7,0,0,1,487.5,650ZM325,29C161.785,29,29,161.785,29,325V473c0,81.607,66.393,148,148,148H473c81.607,0,148-66.392,148-148V325C621,161.785,488.215,29,325,29Z');
        context.fillStyle = this.background;
        context.fill(path1);

        context.font = "bold 40px Inter";
        var n = 40;
        var a1 = Math.PI / -2;
        var a2 = Math.PI / 2;
        var delta_a = (a2 - a1) / n;
        var re = 225;
        var ri = 100;
        var rm = 120;
        var cx = 300;
        var cy = 310;
        var min = this.minimum;
        var max = this.maximum;

        for (var i = a1; i <= a2; i = i + delta_a){
            context.beginPath();
    
            if ((i % (4 * delta_a)) == 0){
                var rz = ri;
                context.fillStyle = this.color;
                context.fillText( ( min + (max - min) / n * (i / delta_a + n / 2) ), (cx + re * 1.05 * Math.sin(i)) * 0.98, cy - re * 1.05 * Math.cos(i));
            }
            else {
                rz = rm;
            }
        }

        var arrowV = num;

        var arrowA = (arrowV / (max - min)) * (a2 - a1) + a1;
        var arrowX = cx + re * Math.sin(arrowA) + 20;
        var arrowY = cy - re * Math.cos(arrowA) - 15;

        context.strokeStyle = this.arrow_color;
        context.lineWidth = 20;
        context.beginPath();
        context.moveTo(cx + 20, cy - 10);
        context.lineTo(arrowX, arrowY);
        context.stroke();

        context.fillStyle = "#262626";
        context.strokeStyle = "#262626";
        //context.fillRect(200, 100, 300, 300);
        var br = 200;
        context.lineJoin = "round";
        context.lineWidth = br;
        context.strokeRect(190 + (br/2), 300+(br/2), 300-br, 300-br);
        context.fill();
        
        context.font = "bold 190px Inter";
        context.fillStyle = "#2DAD06";
        context.fillText(arrowV, 215, 470);
        
        var self = this;
        setTimeout(function(){
            self.change();
        }, 3000);
    }
    change(){
        var rand = Math.round(Math.random() * (this.maximum - this.minimum) + this.minimum);
        console.log(rand);
        var canva = $(this.position).get(0);
        var context = canva.getContext("2d");
        context.clearRect(0, 0, canva.width, canva.height);
        this.draw(rand);
    }
}

new SpeedoMeter("#mycanva", 0, 100, "#B8DDE3", "white", "#FF4848");