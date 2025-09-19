let peso = 0;
let pesoTotal = 0;

for( let num = 1; num < 11; num = num + 1 ){
    peso = prompt('Insira o peso da pessoa número ' + num);
    pesoTotal = pesoTotal + Number(peso);

  
}

let media = pesoTotal / 10; // Cálculo de média

console.log(media)

console.log('✅')