img = "";
status = ""; 

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectiog objects";
}

    function modelLoaded() 
    {
        console.log("Model Loaded!")
        status = true;
        objectDetector.detect(img, gotResult);
    }

function gotResult()
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350 );

    
    fill("#0000FF");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320 );
}

