function setup(){
    canvas = createCanvas(800, 600)
    canvas.parent("canvas")
    video.hide()
} 
function draw(){
    image(video, 0, 0, 800, 600)
}
function Iniciar(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("resultStatus").innerHTML = "Carregando modelo."
}
function modelLoaded(){
console.log("Modelo carregado!")
}
    