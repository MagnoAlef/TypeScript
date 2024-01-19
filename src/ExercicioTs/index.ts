// A primeira funcao devera salvar um objeto spaceship com no minimo as seguintes propriedades.
//     name , que devera ser inserido pelo usuario 
//     pilot , que devera ser inserido pelo usuario
//     crewLimit , o tamanho maximo da tripulacao que devera ser inserido pelo usuario crew , um array de strings inicialmente
// vazio 
//     inMission , que inicialmente devera ser falso

teste = []

function spaceshipExercicio(name: string, pilot: string) {
    const spaceship = {
        nome: name,
        piloto: pilot,
        inMission: false,
        crewLimit: teste
    };

    return spaceship;
}

// console.log(spaceshipExercicio('magno', 'juliana'));

// A segunda funcao devera adicionar um membro a tripulação de uma determinada nava , no entanto o tamanho maximo de
// tripulante não pode ser excedido

function addTripulante(add){
    teste = add
}

// A terceira funcao devera enviar uma determinada nave em uma missão caso ela ja não esteja . 
// Para isso e preciso 1/3 da sua tripulacao esteja preenchida , arredondando para baixo

// A quarta funcao devera lista todas as naves registradas e suas respectivas informações