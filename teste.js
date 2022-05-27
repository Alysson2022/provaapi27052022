function fatorial(numero)
{
    let x= 0;

    for(let cont= numero; cont >=1; cont-- ){
        x = cont*cont;
    }

    return x;
}
console.log(fatorial(5));