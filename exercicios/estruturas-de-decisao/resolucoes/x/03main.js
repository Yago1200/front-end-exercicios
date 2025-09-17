let senha = prompt("Digite sua senha:");
let senhaArmazenada = '123456';

if ( senha == senhaArmazenada){
    console.log("Login efetuado com sucesso.");
} else {
    console.log("Senha Incorreta.");
}




if (isNaN(senha)) {
    console.log("Insira apenas números!!!");
} else {
    let num = Number(senha);
    console.log("✅");
}