var ball;
var database


function setup(){
    createCanvas(500,500);
    ball = createSprite(0,0,10,10);
    ball.shapeColor = "red";
     database=firebase.database();
    var ballPosition=database.ref('Ball/Position');
    ballPosition.on("value", read);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/Position').set({
         'x':ball.x+x,
         'y': ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function read(data){
   var pos=data.val();
   ball.x=pos.x
   ball.y=pos.y



}
