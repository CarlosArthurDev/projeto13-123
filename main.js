var modelStatus=""
function preload(){
    img=loadImage("download-7.jpg")
}
function setup(){
    canvas=createCanvas(640,420)
    canvas.center()

    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status detectando objetos."
}
function draw(){
    image(img,0,0,640,420)
    fill("#FF0000")
    text("armario",45,75)
    stroke("#FF0000")
    noFill()
    rect(30,60,425,140)

    fill("#FF235")
    text("micro-ondas",450,120)
    stroke("#FF235")
    noFill()
    rect(450,10,175,400)
}

function modelLoaded(){
    console.log("modelo carregado")
    modelStatus=true
    objectDetector.detect(img,gotResult)

}
function gotResult(error,results){
    if(error){  
        console.log(error)
    }
    console.log(results)
    
} 
