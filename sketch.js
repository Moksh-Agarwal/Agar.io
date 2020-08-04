var blob;

var blobs=[];
var zoom=1;
function setup()
{
    createCanvas(600,600);
blob= new Blob(0, 0,64);

for(var i=0; i<300; i++)
{
    var x= random(-width, width);
    var y= random(-height, height); 
    blobs[i]= new Blob(x,y,16);
}
}
function draw()
{
    background(0);

   // translate(width/2-blob.pos.x, height/2-blob.pos.y);
   translate(width/2, height/2);
   var newzoom= 64/blob.r;
   zoom=lerp(zoom,newzoom,0.1);
    scale(zoom);
    translate(-blob.pos.x,-blob.pos.y);
blob.display();
blob.update();
for(var i=blobs.length-1; i>=0; i--)
{
    blobs[i].display();
    if(blob.eats(blobs[i]))
    {
blobs.splice(i,1);
    }
   
}
}