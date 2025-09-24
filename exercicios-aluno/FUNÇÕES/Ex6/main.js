function encontreMaior(a, b, c){
  let maior = a;
  if(b > maior){
    return maior = b;
  } if (c > maior){
    return maior = c;
  } 
  return maior;
}
  

console.log(encontreMaior(30, 20, 80));