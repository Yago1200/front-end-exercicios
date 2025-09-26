let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12];
let diasDaSemana = [
    'Domingo      ',
    'Segunda-feira',
    'Terça-feira  ',
    'Quarta-feira ',
    'Quinta-feira ',
    'Sexta-feira  ',
    'Sábado       ',
]

const indicadorDeUso = (numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return '🟢';
    } else if ( numeroDeHoras <= 3) {
        return '🟡';
    } else {
        return '🔴';
    }
}

for(let contador = 0; contador <= 6; contador++) {
    let farol = indicadorDeUso(usoDiasDaSemana[contador]);
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];
    let mensagem = (horas > 1) ? 'horas de uso' : 'hora de uso'; // Operador ternário

    console.log(`${farol} 📅 ${dia} | ${horas.toFixed(2)} ${mensagem}`);
}




// console.log(typeof usoDiasDaSemana) // objeto
// console.log(typeof usoDiasDaSemana[0]) // number
// console.log(typeof indicadorDeUso) // function