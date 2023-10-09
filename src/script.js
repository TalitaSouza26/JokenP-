
const result = document.querySelector('.result')
const pontuacao = document.querySelector('#humanPontos')
  const maquina = document.querySelector('#maquinaPontos')
  const escolhaMaquina = document.querySelector('#escolhaMaquina');
  const escolhaPlayer = document.querySelector('#escolhaVoce')



  let pontosNumber = 0
  let maquinaNumber = 0


const playHuman = (humanChoice) => {


    playTheGame(humanChoice, playMachine())
}

const playMachine = () =>{
    const choices = ['pedra', 'papel','tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}

const playTheGame = (human, machine) =>{
    console.log('Humano: ' + human + "Maquina" + machine)
  

    if (human === machine){
      result.innerHTML = "Deu empate !"
    } else if((human === 'papel' && machine === 'pedra')|| (human === 'pedra' && machine === 'tesoura') || (human === 'tesoura' && machine === 'papel') ){
        pontosNumber ++
        pontuacao.innerHTML = pontosNumber
          
        pontosNumber
           result.innerHTML = "Você ganhou !"
    } else{
        maquinaNumber++
        maquina.innerHTML = maquinaNumber
        result.innerHTML = "Você perdeu para a maquina"
    }
     escolhaMaquina.innerHTML = machine.toUpperCase();
     escolhaPlayer.innerHTML = human.toUpperCase();

}



