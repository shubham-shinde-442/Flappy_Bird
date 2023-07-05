const cvs = document.getElementById("board");
const ctx = cvs.getContext("2d");

let frames = 0;
const sprite = new Image();
sprite.src = "All_In_One_image.png";

const state = {
    current : 0,
    getReady : 0,
    game : 1 ,
    over : 2

}

const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}

const bgImg = {
    sX : 0 ,
    sY : 0 , 
    w : 275 , 
    h : 226 ,
    x : 0 ,
    y : cvs.height - 226 ,

    draw : function(){
        ctx.drawImage(sprite ,this.sX ,this.sY ,this.w ,this.h ,this.x ,this.y ,this.w , this.h);
    }
}