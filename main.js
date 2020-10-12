var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(img)
{
player_object=img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set
({ 
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});
}
function new_image(getimage)
{
    fabric.Image.fromURL(getimage,function(img)
{
block_image_object=img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set
({ 
    top:player_y,//comes with avenger_bg only//
    left:player_x
});
canvas.add(block_image_object);
});
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey==true && keyPressed=='80')
{
    console.log("P+Shift are pressed together")
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (e.shiftKey==true && keyPressed=='77')
{
    console.log("M+Shift are pressed together")
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
    if (keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if (keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if (keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if (keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if (keyPressed=='66')
    {
        new_image("black_widow.png")
        console.log("b");
    }
    if (keyPressed=='67')
    {
        new_image("captain_america.png")
        console.log("c");
    }
    if (keyPressed=='72')
    {
        new_image("hulk.png")
        console.log("h");
    }
    if (keyPressed=='73')
    {
        new_image("iron.png")
        console.log("i");
    }
    if (keyPressed=='83')
    {
        new_image("spider_man.png")
        console.log("s");
    }
    if (keyPressed=='84')
    {
        new_image("thanos.png")
        console.log("t");
    }
    if (keyPressed=='82')
    {
        new_image("thor.png")
        console.log("r");
    }
    if (keyPressed=='65')
    {
        new_image("ant_man.png")
        console.log("a");
    }
    if (keyPressed=='85')
    {
        new_image("ultron.png")
        console.log("u");
    }
    if (keyPressed=='80')
    {
        new_image("black_panther.png")
        console.log("p");
    }
}

function up()
{
    if (player_y>=100)
    player_y=player_y-block_image_height;
    console.log(block_image_height);
    console.log("When up is pressed x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}
function down()
{
    if (player_y<=685)
    player_y=player_y+block_image_height;
    console.log(block_image_height);
    console.log("When down is pressed x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}
function left()
{
    if (player_x>=100)
    player_x=player_x-block_image_width;
    console.log(block_image_width);
    console.log("When left is pressed x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}
function right()
{
    if (player_x<=885)
    player_x=player_x+block_image_width;
    console.log(block_image_width);
    console.log("When right is pressed x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}