function resta(){
     let a = 8;
     let b = 6;
     let rest = a - b;

     console.log("El resultado de la resta es " + rest);

}

function restaMulti(){
    let a = 10;
    let b = 3;
    let rest = a - b;
    let mul = a * b;
    console.log("El resultado de la resta es " + rest + " y el de la multiplicacion es: " + mul);

}

function rangoAleatorio(){
    const MIN = 0;
    const MAX = 10;

    let a = 7;
    let b = 12;
    let resultado = 0;
    aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN) 
    
    if(aleatorio < 5){
        resultado = a - b;
    }else{
        resultado = a * b; 
    }    
    console.log("El resultado es: " + resultado);
  
}

function rangoAleatorioMeses(){
    const MIN = 1;
    const MAX = 12;
    aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN) 
    
    if (aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7 || aleatorio == 8 || aleatorio == 10 || aleatorio == 12){
        console.log("Este mes tiene 31 días");
    }else if(aleatorio == 4 || aleatorio == 6 || aleatorio == 9 || aleatorio == 11){
        console.log("Este mes tiene 30 días");
    }else if(aleatorio == 2){
        console.log("Este mes tiene 29 días");
    }
     
    
}