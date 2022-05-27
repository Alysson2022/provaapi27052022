export function semafaro( cor ){
    let msg="";
    if( cor.toLowerCase() == "verde"){
        msg= "Pode passar";
    }

    else if(cor.toLowerCase() == "amarelo"){
        msg= "Reduz a velocidade";
    }

    else if(cor.toLowerCase() == "vermelho"){
        msg="Aguarde";
    }

    else{
        msg="Inválido";
    }

    return msg;
}


export function diadasemana(dia){
    let nome= "";
    if(dia==0){
        nome= "Domingo";
    }
    
    else if(dia == 1){
        nome= "Segunda";
    }

    else if(dia == 2){
        nome= "Terça";
    }

    else if(dia == 3){
        nome= "Quarta";
    }

    else if(dia == 4){
        nome= "Quinta";
    }

    else if(dia == 5){
        nome= "Sexta";
    }

    else if(dia == 6){
        nome= "Sabado";
    }

    else{
        nome="inválido";
    }

    return nome;
}



 export function fatorial( numero){
    let x= 1;

    for(let cont= numero; cont >=1; cont-- ){
        x *= cont
    }

    return x;
}

export function sequencia (par){
    let array = [];
    let num = 0;
    for (let i = 0; i < par; i++) {
        array[i] = num * 2;
        num++;
    }
    return array;
}