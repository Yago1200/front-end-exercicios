let senha = '1234';
let senhaDoUsuario;

do{
    senhaDoUsuario = prompt('Insira sua senha:')
} while(senhaDoUsuario != senha)

console.log('✅')