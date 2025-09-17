let experiencia = prompt("Quantos anos de experiência você tem ?");
let graduação = 0;

if (experiencia < 5 ){ 
    pontuacao = pontuacao + 10; // Expressão
} else if (experiencia >= 5){
    pontuacao = pontuacao + 20;
}

let formacao = prompt("Qual é seu nível de formação?")

if ( formacao == "graduação"){
    // pontuacao = pontuacao + 10;
    pontuacao += 10; 
}else if ( formacao == "especialização"){
    pontuacao += 20; 
}else if ( formacao == "mestrado"){
    pontuacao += 30; 
}else if ( formacao == "doutorado"){
    pontuacao += 40; 

let total = (experiencia + formacao)
console.log("Sua pontuação é " + pontuacao + "pontos") 