let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12];
let DiasDaSemana = [
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
        return '🟢'
    } else if ( numeroDeHoras <= 3) {
        return '🟡'
    } else {
        return '🔴'
    }
}




// console.log(typeof usoDiasDaSemana) // objeto
// console.log(typeof usoDiasDaSemana[0]) // number
// console.log(typeof indicadorDeUso) // function