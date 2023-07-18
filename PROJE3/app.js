let kalemRengi = "#000000";
let kalemBoyutu = 1;

let canvas = new fabric.Canvas('canvas');
canvas.isDrawingMode = true;

function renkDegistir(renk) {
    kalemRengi = renk;
    canvas.freeDrawingBrush.color = kalemRengi;
}

function boyutDegistir(boyut) {
    kalemBoyutu = parseInt(boyut);
    canvas.freeDrawingBrush.width = kalemBoyutu;
}

function temizle() {
    canvas.clear();
}

function cizgiCiz() {
    canvas.isDrawingMode = true;
}

function kareCiz() {
    canvas.isDrawingMode = false;
    let x = 20;
    let y = 20;
    let width = 40;
    let height = 40;

    let rect = new fabric.Rect({
        left: x,
        top: y,
        width: width,
        height: height,
        fill: kalemRengi,
        stroke: "black",
        strokeWidth: kalemBoyutu
    });

    canvas.add(rect);
}

function dikdortgenCiz() {
    canvas.isDrawingMode = false;

    let x = 80;
    let y = 20;
    let width = 60;
    let height = 40;

    let rect = new fabric.Rect({
        left: x,
        top: y,
        width: width,
        height: height,
        fill: kalemRengi,
        stroke: "black",
        strokeWidth: kalemBoyutu
    });

    canvas.add(rect);
}

function daireCiz() {
    canvas.isDrawingMode = false;

    let x = 180;
    let y = 40;
    let radius = 20;

    let circle = new fabric.Circle({
        left: x,
        top: y,
        radius: radius,
        fill: kalemRengi,
        stroke: "black",
        strokeWidth: kalemBoyutu
    });

    canvas.add(circle);
}