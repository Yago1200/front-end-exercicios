let senha = prompt("Digite sua senha:");

if (isNaN(senha)) {
    console.log("Insira apenas números");
} else {
    let num = Number(senha);
    console.log("✅");
}