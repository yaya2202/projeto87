

// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
   // para enviar imagens
   fabric.Image.fromURL(getImage, function(Img) {
    blockImageObject = Img;
    
    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
        top:blockY,
        left:blockX
    })
    canvas.add(blockImageObject);
   })

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == 69) // adicione os códigos adequados às teclas
   {
       // enviar ranger escarlate
       newImage("nhonho.jpg");
        console.log("e");
        blockX = 5;
   }
   if(keyPressed == 86)
   {
       
       // enviar ranger verde
       newImage("quico.png");
        console.log("v");
        blockX = 300;
   }
   
   if(keyPressed == 65)
   {
       
       // enviar ranger amarelo
       newImage("chaves.png");
        console.log("a");
        blockX = 530;
   }
   if(keyPressed == 82)
   {
       
       // enviar ranger rosa
       newImage("chiquinha.png");
        console.log("r");
        blockX = 700;
   }
}