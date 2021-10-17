//calcular perimetro cuadrado
function areacuadrado(lado){
    return lado * lado;
}

function perimetrocuadrado(lado){
    return lado * 4;
}

function calcularperimetrocuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    const perimetro = perimetrocuadrado(value);
    alert(perimetro);

}
//calcular area cuadrado
 function calcularareacuadrado(){
     const input2 = document.getElementById("inputcuadrado");
     const valuea = input2.value;
     const areac = areacuadrado(valuea);
     alert(areac);
 }

//Area del triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

function calcularareatriangulo(){
    const baset = document.getElementById("inputbaset");
    const valorbase = baset.value;
    const alturat = document.getElementById("inputalturat");
    const valoraltura = alturat.value;

     const area = areaTriangulo(valorbase,valoraltura);
     alert(area);

}
//Perimetro del triangulo
function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}


function calculaperimetrotriangulo(){
    const lado1 = document.getElementById("inputladot1");
    const l1 = Number(lado1.value);
    const lado2 = document.getElementById("inputladot2");
    const l2 = Number(lado2.value);
    const baset = document.getElementById("inputbaset");
    const valorbase = Number(baset.value);

     const perimetrot = perimetrotriangulo(l1,l2,valorbase);
     alert(perimetrot);

}

//calcular area circulo
function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;

}
const PI = Math.PI;
console.log("el PI del circulo es: " + PI + "cm");

function areacirculo(radio){
    return (radio * radio)* PI;

}

function diametrocirculo(radio){
    return radio * 2;
} 

function calcularareacirculo(){
    const radio = document.getElementById("inputradioc");
    const valueac = radio.value;
    const areac = areacirculo(valueac);
    alert(areac);
}

//calcular perimetro circulo
function calcularperimetrocirculo(){
    const radio = document.getElementById("inputradioc");
    const valuepc = radio.value;
    const perimetroc = perimetrocirculo(valuepc);
    alert(perimetroc);
}

//calcular diametro circulo

function calculardiametrocirculo(){
    const radiodc = document.getElementById("inputradioc");
    const valuedc = radiodc.value;
    const diametroc = diametrocirculo(valuedc);
    alert(diametroc);
}
