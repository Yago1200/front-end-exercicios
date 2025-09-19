let num;
let numMaior = 0;
let contador = 0;

do {
  num = Number(prompt('Insira um número:'))
  
  if(num > numMaior){
    numMaior = num;
  }

  contador = contador + 1

} while(contador < 5);

console.log('O maior número insirido foi ' + numMaior)

console.log('✅')